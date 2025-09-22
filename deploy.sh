#!/bin/bash
# Affordable Home Services - Ubuntu Server Deployment Script

set -e  # Exit on any error

PROJECT_NAME="affordable-home-services"
PROJECT_DIR="$(pwd)"
SERVICE_NAME="affordable-home-services"
DOMAIN="affordablehomeservices.com"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_step() {
    echo -e "${BLUE}[STEP]${NC} $1"
}

# Check if running as root
check_root() {
    if [[ $EUID -eq 0 ]]; then
        print_error "This script should not be run as root for security reasons."
        print_status "Please run as a regular user with sudo privileges."
        exit 1
    fi
}

# Install Docker if not present
install_docker() {
    if ! command -v docker &> /dev/null; then
        print_step "Installing Docker..."
        
        # Update package index
        sudo apt-get update
        
        # Install prerequisite packages
        sudo apt-get install -y apt-transport-https ca-certificates curl gnupg lsb-release
        
        # Add Docker's official GPG key
        curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
        
        # Set up the stable repository
        echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
        
        # Install Docker Engine
        sudo apt-get update
        sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
        
        # Add current user to docker group
        sudo usermod -aG docker $USER
        
        # Start and enable Docker service
        sudo systemctl start docker
        sudo systemctl enable docker
        
        print_status "Docker installed successfully!"
        print_warning "Please log out and log back in to use Docker without sudo."
    else
        print_status "Docker is already installed."
    fi
}

# Install Docker Compose if not present
install_docker_compose() {
    if ! command -v docker-compose &> /dev/null && ! docker compose version &> /dev/null; then
        print_step "Installing Docker Compose..."
        
        # Download Docker Compose
        sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
        
        # Make it executable
        sudo chmod +x /usr/local/bin/docker-compose
        
        # Create symbolic link
        sudo ln -sf /usr/local/bin/docker-compose /usr/bin/docker-compose
        
        print_status "Docker Compose installed successfully!"
    else
        print_status "Docker Compose is already installed."
    fi
}

# Stop existing services
stop_existing_services() {
    print_step "Stopping any existing services..."
    
    # Stop existing Docker containers
    if docker ps -q --filter "name=${PROJECT_NAME}" | grep -q .; then
        print_status "Stopping existing containers..."
        docker-compose down --remove-orphans 2>/dev/null || true
    fi
    
    # Stop systemd service if it exists
    if systemctl is-active --quiet ${SERVICE_NAME} 2>/dev/null; then
        print_status "Stopping systemd service..."
        sudo systemctl stop ${SERVICE_NAME}
    fi
    
    print_status "Existing services stopped."
}

# Build and deploy application
deploy_application() {
    print_step "Building and deploying the application..."
    
    cd "$PROJECT_DIR"
    
    # Clean up any existing containers and images
    print_status "Cleaning up existing containers..."
    docker-compose down --remove-orphans 2>/dev/null || true
    
    # Remove old images to free up space
    docker image prune -f
    
    # Build the application
    print_status "Building Docker image..."
    docker-compose build --no-cache
    
    # Start the application
    print_status "Starting the application..."
    docker-compose up -d
    
    # Wait for services to be healthy
    print_status "Waiting for services to be healthy..."
    sleep 30
    
    # Check if the application is running
    if docker-compose ps | grep -q "Up"; then
        print_status "Application deployed successfully!"
    else
        print_error "Application failed to start. Check logs with: docker-compose logs"
        exit 1
    fi
}

# Setup systemd service for auto-startup
setup_systemd_service() {
    print_step "Setting up systemd service for auto-startup..."
    
    # Create systemd service file
    sudo tee /etc/systemd/system/${SERVICE_NAME}.service > /dev/null <<EOF
[Unit]
Description=Affordable Home Services Application
Requires=docker.service
After=docker.service network-online.target
Wants=network-online.target

[Service]
Type=simple
WorkingDirectory=${PROJECT_DIR}
User=${USER}
Group=docker
Environment=PATH=/usr/local/bin:/usr/bin:/bin
Environment=COMPOSE_PROJECT_NAME=${PROJECT_NAME}

ExecStartPre=/bin/bash -c 'timeout 30 sh -c "until docker info > /dev/null 2>&1; do sleep 1; done"'
ExecStartPre=/usr/local/bin/docker-compose down --remove-orphans
ExecStart=/usr/local/bin/docker-compose up -d
ExecStop=/usr/local/bin/docker-compose down --timeout 30
ExecReload=/usr/local/bin/docker-compose restart

Restart=on-failure
RestartSec=30
TimeoutStartSec=600
TimeoutStopSec=180

[Install]
WantedBy=multi-user.target
EOF
    
    # Reload systemd and enable service
    sudo systemctl daemon-reload
    sudo systemctl enable ${SERVICE_NAME}.service
    
    print_status "Systemd service configured successfully!"
}

# Setup nginx reverse proxy
setup_nginx() {
    read -p "Do you want to setup nginx reverse proxy for ${DOMAIN}? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        print_step "Setting up nginx reverse proxy..."
        
        # Install nginx if not present
        if ! command -v nginx &> /dev/null; then
            sudo apt-get update
            sudo apt-get install -y nginx
        fi
        
        # Create nginx configuration for your domain
        sudo tee /etc/nginx/sites-available/${DOMAIN} > /dev/null <<EOF
server {
    listen 80;
    server_name ${DOMAIN} www.${DOMAIN};

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF
        
        # Enable site
        sudo ln -sf /etc/nginx/sites-available/${DOMAIN} /etc/nginx/sites-enabled/
        sudo rm -f /etc/nginx/sites-enabled/default
        
        # Test and restart nginx
        sudo nginx -t
        sudo systemctl restart nginx
        sudo systemctl enable nginx
        
        print_status "Nginx configured successfully for ${DOMAIN}!"
        print_status "You can now set up SSL with: sudo certbot --nginx -d ${DOMAIN} -d www.${DOMAIN}"
    fi
}

# Setup SSL with Let's Encrypt
setup_ssl() {
    if command -v nginx &> /dev/null; then
        read -p "Do you want to setup SSL/HTTPS with Let's Encrypt? (y/n): " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            print_step "Setting up SSL certificate..."
            
            # Install certbot
            sudo apt-get update
            sudo apt-get install -y certbot python3-certbot-nginx
            
            # Get SSL certificate
            sudo certbot --nginx -d ${DOMAIN} -d www.${DOMAIN} --non-interactive --agree-tos --email info@${DOMAIN}
            
            # Auto-renewal
            sudo systemctl enable certbot.timer
            
            print_status "SSL certificate installed successfully!"
        fi
    fi
}

# Setup firewall
setup_firewall() {
    read -p "Do you want to setup firewall rules? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        print_step "Setting up firewall..."
        
        # Enable UFW
        sudo ufw --force enable
        
        # Allow SSH
        sudo ufw allow ssh
        
        # Allow HTTP and HTTPS
        sudo ufw allow 80
        sudo ufw allow 443
        
        # Allow application port (for direct access if needed)
        sudo ufw allow 3000
        
        print_status "Firewall configured successfully!"
    fi
}

# Test deployment
test_deployment() {
    print_step "Testing the deployment..."
    
    # Wait a moment for the application to fully start
    sleep 10
    
    # Test application locally
    if curl -f -s "http://localhost:3000/" > /dev/null; then
        print_status "✅ Application is accessible locally"
    else
        print_warning "❌ Local application test failed"
        print_status "Check logs with: docker-compose logs"
    fi
    
    # Test domain if nginx is configured
    if command -v nginx &> /dev/null && nginx -t &> /dev/null; then
        if curl -f -s "http://${DOMAIN}/" > /dev/null; then
            print_status "✅ Application is accessible via domain"
        else
            print_warning "❌ Domain test failed - make sure DNS is pointing to this server"
        fi
    fi
}

# Show deployment information
show_deployment_info() {
    local server_ip=$(curl -s ifconfig.me || echo "your-server-ip")
    
    echo ""
    echo "=========================================="
    echo "🚀 DEPLOYMENT COMPLETED SUCCESSFULLY! 🚀"
    echo "=========================================="
    echo ""
    echo "🌐 Your website: https://${DOMAIN}"
    echo "📱 Direct access: http://${server_ip}:3000"
    echo "📄 Auto-startup: ENABLED"
    echo ""
    echo "📊 Management Commands:"
    echo "   • Check status: systemctl status ${SERVICE_NAME}"
    echo "   • Start service: sudo systemctl start ${SERVICE_NAME}"
    echo "   • Stop service: sudo systemctl stop ${SERVICE_NAME}"
    echo "   • Restart service: sudo systemctl restart ${SERVICE_NAME}"
    echo ""
    echo "🐳 Docker Commands:"
    echo "   • docker-compose ps (show running containers)"
    echo "   • docker-compose logs -f (follow logs)"
    echo "   • docker-compose restart (restart services)"
    echo "   • docker-compose down (stop services)"
    echo ""
    echo "🔑 Next Steps:"
    echo "   • Point your domain DNS to: ${server_ip}"
    echo "   • Set up SSL: sudo certbot --nginx -d ${DOMAIN}"
    echo "   • Configure domain in registrar"
    echo ""
    echo "📂 Application Directory: ${PROJECT_DIR}"
    echo "=========================================="
}

# Main deployment function
main() {
    echo ""
    echo "🚀 Affordable Home Services - Ubuntu Server Deployment"
    echo "====================================================="
    echo ""
    
    check_root
    install_docker
    install_docker_compose
    stop_existing_services
    deploy_application
    setup_systemd_service
    setup_nginx
    setup_ssl
    setup_firewall
    test_deployment
    show_deployment_info
    
    echo ""
    print_status "Deployment completed! Your application is running and will auto-start on boot."
    print_warning "If you installed Docker for the first time, please log out and log back in."
}

# Run main function
main "$@"
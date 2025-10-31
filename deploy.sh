#!/bin/bash
# =====================================================
# Affordable Home Services - Ubuntu Server Deployment
# =====================================================

set -e  # Exit on any error

# Configuration
PROJECT_NAME="affordable-home-services"
PROJECT_DIR="/home/ubuntu/affordablehomeservices"
SERVICE_NAME="affordablehomeservices"
DOMAIN="affordablehomeservices.com"
USER="ubuntu"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Functions for colored output
print_header() {
    echo ""
    echo -e "${CYAN}═══════════════════════════════════════════════════${NC}"
    echo -e "${CYAN}  $1${NC}"
    echo -e "${CYAN}═══════════════════════════════════════════════════${NC}"
    echo ""
}

print_step() {
    echo -e "${BLUE}➜${NC} $1"
}

print_success() {
    echo -e "${GREEN}✓${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

# Check if running as root
check_root() {
    if [[ $EUID -eq 0 ]]; then
        print_error "This script should not be run as root!"
        print_warning "Please run as a regular user with sudo privileges."
        exit 1
    fi
}

# Check Ubuntu version
check_ubuntu() {
    if [ -f /etc/os-release ]; then
        . /etc/os-release
        if [[ "$ID" == "ubuntu" ]]; then
            print_success "Running on Ubuntu $VERSION_ID"
        else
            print_warning "This script is designed for Ubuntu, but detected: $ID"
            read -p "Continue anyway? (y/n): " -n 1 -r
            echo
            if [[ ! $REPLY =~ ^[Yy]$ ]]; then
                exit 1
            fi
        fi
    fi
}

# Update system
update_system() {
    print_step "Updating system packages..."
    sudo apt-get update
    sudo apt-get upgrade -y
    print_success "System updated successfully"
}

# Install Docker
install_docker() {
    if command -v docker &> /dev/null; then
        print_success "Docker is already installed ($(docker --version))"
        return
    fi
    
    print_step "Installing Docker..."
    
    # Install prerequisites
    sudo apt-get install -y \
        apt-transport-https \
        ca-certificates \
        curl \
        gnupg \
        lsb-release
    
    # Add Docker's official GPG key
    sudo mkdir -p /etc/apt/keyrings
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
    
    # Set up repository
    echo \
      "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
      $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    
    # Install Docker Engine
    sudo apt-get update
    sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
    
    # Add current user to docker group
    sudo usermod -aG docker $USER
    
    # Start and enable Docker
    sudo systemctl start docker
    sudo systemctl enable docker
    
    print_success "Docker installed successfully!"
    print_warning "You may need to log out and log back in for group changes to take effect"
}

# Verify Docker installation
verify_docker() {
    print_step "Verifying Docker installation..."
    
    if docker --version &> /dev/null; then
        print_success "Docker: $(docker --version)"
    else
        print_error "Docker verification failed"
        exit 1
    fi
    
    if docker compose version &> /dev/null; then
        print_success "Docker Compose: $(docker compose version)"
    else
        print_error "Docker Compose verification failed"
        exit 1
    fi
}

# Stop existing services
stop_existing_services() {
    print_step "Stopping existing services..."
    
    # Stop systemd service if it exists
    if sudo systemctl is-active --quiet ${SERVICE_NAME} 2>/dev/null; then
        print_step "Stopping systemd service..."
        sudo systemctl stop ${SERVICE_NAME}
        print_success "Systemd service stopped"
    fi
    
    # Stop Docker containers if they exist
    if [ -d "$PROJECT_DIR" ]; then
        cd "$PROJECT_DIR"
        if docker compose ps -q 2>/dev/null | grep -q .; then
            print_step "Stopping Docker containers..."
            docker compose down --remove-orphans 2>/dev/null || true
            print_success "Docker containers stopped"
        fi
    fi
}

# Deploy application
deploy_application() {
    print_step "Deploying application..."
    
    # Create project directory if it doesn't exist
    if [ ! -d "$PROJECT_DIR" ]; then
        print_warning "Project directory doesn't exist. Please upload your project files first."
        print_step "Creating directory: $PROJECT_DIR"
        mkdir -p "$PROJECT_DIR"
        print_warning "Please upload your project files to: $PROJECT_DIR"
        print_warning "Then run this script again."
        exit 1
    fi
    
    cd "$PROJECT_DIR"
    
    # Check if required files exist
    if [ ! -f "package.json" ]; then
        print_error "package.json not found in $PROJECT_DIR"
        print_warning "Please upload your project files first!"
        exit 1
    fi
    
    # Clean up old containers and images
    print_step "Cleaning up old containers..."
    docker compose down --remove-orphans 2>/dev/null || true
    docker system prune -f
    
    # Build and start
    print_step "Building Docker image (this may take a few minutes)..."
    docker compose build --no-cache
    
    print_step "Starting application..."
    docker compose up -d
    
    # Wait for application to start
    print_step "Waiting for application to start..."
    sleep 20
    
    # Check if container is running
    if docker compose ps | grep -q "Up"; then
        print_success "Application deployed successfully!"
    else
        print_error "Application failed to start"
        print_warning "Check logs with: docker compose logs"
        exit 1
    fi
}

# Setup systemd service
setup_systemd() {
    print_step "Setting up systemd service for auto-startup..."
    
    # Create service file
    cat > /tmp/${SERVICE_NAME}.service << EOF
[Unit]
Description=Affordable Home Services Website
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
ExecStartPre=/usr/bin/docker compose down --remove-orphans
ExecStart=/usr/bin/docker compose up --build
ExecStop=/usr/bin/docker compose down --timeout 30
ExecReload=/usr/bin/docker compose restart

Restart=on-failure
RestartSec=30
TimeoutStartSec=600
TimeoutStopSec=180

[Install]
WantedBy=multi-user.target
EOF
    
    # Install service file
    sudo mv /tmp/${SERVICE_NAME}.service /etc/systemd/system/${SERVICE_NAME}.service
    sudo chmod 644 /etc/systemd/system/${SERVICE_NAME}.service
    
    # Reload systemd and enable service
    sudo systemctl daemon-reload
    sudo systemctl enable ${SERVICE_NAME}.service
    
    print_success "Systemd service configured successfully!"
}

# Setup Nginx
setup_nginx() {
    read -p "Do you want to setup Nginx reverse proxy? (y/n): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        return
    fi
    
    print_step "Setting up Nginx..."
    
    # Install Nginx
    if ! command -v nginx &> /dev/null; then
        sudo apt-get update
        sudo apt-get install -y nginx
    fi
    
    # Create Nginx configuration
    sudo tee /etc/nginx/sites-available/${DOMAIN} > /dev/null << EOF
server {
    listen 80;
    server_name ${DOMAIN} www.${DOMAIN};
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    
    # Logging
    access_log /var/log/nginx/${DOMAIN}-access.log;
    error_log /var/log/nginx/${DOMAIN}-error.log;
    
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
        
        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }
    
    # Static files caching
    location /_next/static/ {
        proxy_pass http://localhost:3000;
        proxy_cache_valid 200 365d;
        add_header Cache-Control "public, immutable";
    }
}
EOF
    
    # Enable site
    sudo ln -sf /etc/nginx/sites-available/${DOMAIN} /etc/nginx/sites-enabled/
    sudo rm -f /etc/nginx/sites-enabled/default
    
    # Test and restart Nginx
    sudo nginx -t
    sudo systemctl restart nginx
    sudo systemctl enable nginx
    
    print_success "Nginx configured successfully!"
}

# Setup SSL with Certbot
setup_ssl() {
    if ! command -v nginx &> /dev/null; then
        return
    fi
    
    read -p "Do you want to setup SSL/HTTPS with Let's Encrypt? (y/n): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        return
    fi
    
    print_step "Setting up SSL certificate..."
    
    # Install Certbot
    sudo apt-get update
    sudo apt-get install -y certbot python3-certbot-nginx
    
    # Get SSL certificate
    print_warning "Make sure your domain DNS is pointing to this server!"
    read -p "Press Enter to continue or Ctrl+C to cancel..."
    
    sudo certbot --nginx -d ${DOMAIN} -d www.${DOMAIN} \
        --non-interactive --agree-tos \
        --email info@${DOMAIN} || print_warning "SSL setup failed. You can run 'sudo certbot --nginx -d ${DOMAIN}' manually later."
    
    # Setup auto-renewal
    sudo systemctl enable certbot.timer
    
    print_success "SSL certificate installed successfully!"
}

# Setup firewall
setup_firewall() {
    read -p "Do you want to setup UFW firewall? (y/n): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        return
    fi
    
    print_step "Setting up firewall..."
    
    # Install UFW if not present
    sudo apt-get install -y ufw
    
    # Configure UFW
    sudo ufw --force enable
    sudo ufw default deny incoming
    sudo ufw default allow outgoing
    sudo ufw allow ssh
    sudo ufw allow 80/tcp
    sudo ufw allow 443/tcp
    sudo ufw allow 3000/tcp  # Direct access to app (optional)
    
    sudo ufw --force enable
    
    print_success "Firewall configured successfully!"
    sudo ufw status
}

# Test deployment
test_deployment() {
    print_step "Testing deployment..."
    
    sleep 5
    
    # Test local access
    if curl -f -s "http://localhost:3000/" > /dev/null; then
        print_success "✓ Application is accessible locally (http://localhost:3000)"
    else
        print_warning "✗ Local application test failed"
    fi
    
    # Test domain if Nginx is configured
    if command -v nginx &> /dev/null && sudo nginx -t &> /dev/null; then
        if curl -f -s "http://${DOMAIN}/" > /dev/null; then
            print_success "✓ Application is accessible via domain (http://${DOMAIN})"
        else
            print_warning "✗ Domain test failed - check DNS settings"
        fi
    fi
}

# Show deployment info
show_deployment_info() {
    local server_ip=$(curl -s ifconfig.me 2>/dev/null || echo "YOUR-SERVER-IP")
    
    print_header "DEPLOYMENT COMPLETED SUCCESSFULLY!"
    
    echo -e "${GREEN}🎉 Your website is now live!${NC}"
    echo ""
    echo -e "${CYAN}📍 Access URLs:${NC}"
    echo "   • Local: http://localhost:3000"
    echo "   • Direct: http://${server_ip}:3000"
    
    if command -v nginx &> /dev/null; then
        echo "   • Domain: http://${DOMAIN}"
        if [ -d "/etc/letsencrypt/live/${DOMAIN}" ]; then
            echo "   • Secure: https://${DOMAIN}"
        fi
    fi
    
    echo ""
    echo -e "${CYAN}🔧 Management Commands:${NC}"
    echo "   • Check status:  sudo systemctl status ${SERVICE_NAME}"
    echo "   • Start service: sudo systemctl start ${SERVICE_NAME}"
    echo "   • Stop service:  sudo systemctl stop ${SERVICE_NAME}"
    echo "   • Restart:       sudo systemctl restart ${SERVICE_NAME}"
    echo "   • View logs:     docker compose logs -f"
    echo ""
    echo -e "${CYAN}🐳 Docker Commands:${NC}"
    echo "   • View containers: docker compose ps"
    echo "   • View logs:       docker compose logs -f"
    echo "   • Restart:         docker compose restart"
    echo "   • Stop:            docker compose down"
    echo "   • Rebuild:         docker compose up -d --build"
    echo ""
    echo -e "${CYAN}📂 Project Directory:${NC}"
    echo "   ${PROJECT_DIR}"
    echo ""
    
    if ! command -v nginx &> /dev/null; then
        echo -e "${YELLOW}💡 Next Steps:${NC}"
        echo "   • Point your domain DNS to: ${server_ip}"
        echo "   • Run this script again to setup Nginx and SSL"
    fi
    
    echo ""
    print_success "Deployment completed! Your application will auto-start on server reboot."
}

# Main deployment function
main() {
    clear
    print_header "AFFORDABLE HOME SERVICES - DEPLOYMENT SCRIPT"
    
    print_step "Starting deployment process..."
    echo ""
    
    check_root
    check_ubuntu
    update_system
    install_docker
    verify_docker
    stop_existing_services
    deploy_application
    setup_systemd
    setup_nginx
    setup_ssl
    setup_firewall
    test_deployment
    show_deployment_info
    
    echo ""
    print_success "🎉 All done! Your website is now running!"
    
    if groups $USER | grep -q docker; then
        print_success "You're all set!"
    else
        print_warning "Please log out and log back in for Docker group changes to take effect"
    fi
}

# Run main function
main "$@"

# Leak Detection App - Server Deployment

This is a Next.js application for leak detection services, optimized for Ubuntu server deployment with Docker.

## Prerequisites

- Ubuntu 18.04 or later
- User with sudo privileges
- Internet connection

## Quick Deployment

1. **Upload your files to the server:**
   ```bash
   # Create project directory
   mkdir -p ~/leak-detection-app
   cd ~/leak-detection-app
   
   # Upload your src and public folders here
   # Upload all the configuration files
   ```

2. **Make the deployment script executable:**
   ```bash
   chmod +x deploy.sh
   ```

3. **Run the deployment script:**
   ```bash
   ./deploy.sh
   ```

The deployment script will automatically:
- Install Docker and Docker Compose
- Build and deploy your application
- Set up auto-startup service
- Configure nginx reverse proxy (optional)
- Set up firewall rules (optional)

## Manual Deployment

If you prefer to deploy manually:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the application:**
   ```bash
   npm run build
   ```

3. **Start the application:**
   ```bash
   npm start
   ```

## Docker Deployment

1. **Build Docker image:**
   ```bash
   docker-compose build
   ```

2. **Start services:**
   ```bash
   docker-compose up -d
   ```

3. **Check status:**
   ```bash
   docker-compose ps
   ```

## File Structure

```
leak-detection-app/
├── src/                    # Your source code
├── public/                 # Static assets
├── package.json           # Dependencies and scripts
├── next.config.ts         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── components.json        # shadcn/ui configuration
├── Dockerfile             # Docker configuration
├── docker-compose.yaml    # Docker Compose configuration
├── deploy.sh              # Deployment script
├── .env                   # Environment variables
└── README.md              # This file
```

## Environment Variables

Key environment variables in `.env`:

- `NODE_ENV=production` - Set to production mode
- `PORT=3000` - Application port
- `NEXT_TELEMETRY_DISABLED=1` - Disable telemetry

## Service Management

After deployment, manage your application with systemd:

```bash
# Check status
sudo systemctl status leak-detection

# Start service
sudo systemctl start leak-detection

# Stop service
sudo systemctl stop leak-detection

# Restart service
sudo systemctl restart leak-detection

# View logs
sudo journalctl -u leak-detection -f
```

## Docker Commands

Useful Docker commands:

```bash
# View running containers
docker-compose ps

# View logs
docker-compose logs -f

# Restart services
docker-compose restart

# Stop services
docker-compose down

# Rebuild and restart
docker-compose up -d --build
```

## Troubleshooting

1. **Application not accessible:**
   - Check if port 3000 is open: `sudo ufw status`
   - Check Docker containers: `docker-compose ps`
   - Check logs: `docker-compose logs`

2. **Build errors:**
   - Check Node.js version: `node --version`
   - Clear Docker cache: `docker system prune -f`
   - Rebuild: `docker-compose build --no-cache`

3. **Permission errors:**
   - Ensure user is in docker group: `groups $USER`
   - Restart after adding to docker group

## Security Notes

- The application runs on port 3000 by default
- Use nginx reverse proxy for production
- Set up SSL/TLS certificates for HTTPS
- Configure firewall rules appropriately
- Regular security updates recommended

## Support

For issues or questions, check the logs:
- Application logs: `docker-compose logs`
- System logs: `sudo journalctl -u leak-detection`
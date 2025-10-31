# Affordable Home Services - Deployment Package

## 📦 What's Included

This package contains everything you need to deploy your Next.js website on Ubuntu server:

```
deployment-package/
├── Dockerfile                    # Docker configuration
├── docker-compose.yaml           # Docker Compose configuration
├── .env                          # Environment variables
├── deploy.sh                     # Full deployment script (recommended)
├── quick-start.sh               # Quick deployment script
├── affordablehomeservices.service  # Systemd service file
├── DEPLOYMENT_GUIDE.md          # Complete deployment guide
└── README.md                    # This file
```

---

## 🚀 Quick Start (3 Simple Steps)

### Step 1: Connect to Your Server
```bash
ssh ubuntu@your-server-ip
```

### Step 2: Upload Files
```bash
# Create project directory
mkdir -p /home/ubuntu/affordablehomeservices
cd /home/ubuntu/affordablehomeservices

# Upload your project files here (via SCP, SFTP, or Git)
# Make sure to include: src/, public/, package.json, and all deployment files
```

### Step 3: Deploy
```bash
# Make script executable
chmod +x deploy.sh

# Run deployment
./deploy.sh
```

That's it! Your website will be live in about 5-10 minutes.

---

## 📋 Two Deployment Options

### Option 1: Full Deployment (Recommended)

**Use this for:** Production deployment with Nginx, SSL, and auto-startup

```bash
chmod +x deploy.sh
./deploy.sh
```

**Features:**
- ✅ Installs Docker & Docker Compose
- ✅ Builds and deploys application
- ✅ Sets up auto-startup service
- ✅ Configures Nginx reverse proxy
- ✅ Installs SSL certificate
- ✅ Configures firewall
- ✅ Complete production setup

**Time:** 10-15 minutes

---

### Option 2: Quick Deploy

**Use this for:** Quick testing or when Docker is already installed

```bash
chmod +x quick-start.sh
./quick-start.sh
```

**Features:**
- ✅ Installs Docker (if needed)
- ✅ Builds and deploys application
- ✅ Quick and simple

**Time:** 3-5 minutes

**Note:** You'll need to manually configure Nginx and SSL later.

---

## 🎯 What Each File Does

### `Dockerfile`
- Defines how to build your Docker image
- Multi-stage build for optimization
- Production-ready configuration

### `docker-compose.yaml`
- Orchestrates your Docker containers
- Sets environment variables
- Configures networking and health checks

### `.env`
- Contains environment variables
- Site URL, Google Analytics, business info
- **Important:** Update with your actual values!

### `deploy.sh`
- Complete automated deployment script
- Handles everything from A to Z
- Production-ready with Nginx & SSL

### `quick-start.sh`
- Minimal deployment script
- Perfect for testing
- Fast and simple

### `affordablehomeservices.service`
- Systemd service configuration
- Enables auto-startup on boot
- Used by deploy.sh automatically

---

## 📝 Before You Deploy

### 1. Update Environment Variables

Edit `.env` file with your actual values:

```bash
# Update these in .env:
NEXT_PUBLIC_SITE_URL=https://affordablehomeservices.com
NEXT_PUBLIC_GA_TRACKING_ID=G-R8W438QET6
NEXT_PUBLIC_BUSINESS_PHONE=(818) 453-6110
NEXT_PUBLIC_BUSINESS_EMAIL=info@affordablehomeservices.com
```

### 2. Ensure All Project Files Are Uploaded

Required files:
- ✅ `src/` folder (all your source code)
- ✅ `public/` folder (images, assets)
- ✅ `package.json` and `pnpm-lock.yaml`
- ✅ `next.config.ts`
- ✅ `tailwind.config.ts`
- ✅ All deployment files from this package

### 3. DNS Configuration (for production)

Point your domain to your server IP:
```
Type: A
Name: @
Value: YOUR-SERVER-IP

Type: A
Name: www
Value: YOUR-SERVER-IP
```

---

## 🔧 After Deployment

### Access Your Website

- **Local:** http://localhost:3000
- **Direct:** http://your-server-ip:3000
- **Domain:** https://affordablehomeservices.com (after DNS & SSL)

### Check Status

```bash
# Container status
docker compose ps

# View logs
docker compose logs -f

# Service status
sudo systemctl status affordablehomeservices
```

### Management Commands

```bash
# Restart application
docker compose restart

# Stop application
docker compose down

# Rebuild and restart
docker compose up -d --build

# Restart service
sudo systemctl restart affordablehomeservices
```

---

## 📖 Documentation

For detailed instructions, see:
- **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)** - Complete step-by-step guide
- Troubleshooting tips
- Security best practices
- Update procedures
- Monitoring commands

---

## 🆘 Troubleshooting

### Application won't start?
```bash
# Check logs
docker compose logs

# Rebuild
docker compose down
docker compose up -d --build
```

### Port 3000 already in use?
```bash
# Find what's using the port
sudo lsof -i :3000

# Kill the process
sudo kill -9 <PID>
```

### Permission denied?
```bash
# Add user to docker group
sudo usermod -aG docker $USER

# Log out and log back in
```

### Out of memory?
```bash
# Add swap space
sudo fallocate -l 4G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
```

---

## 🎓 First Time Deploying?

**Follow these steps:**

1. Read the [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)
2. Prepare your server (Ubuntu 20.04+)
3. Upload your project files
4. Run `./deploy.sh`
5. Follow the prompts
6. Configure DNS
7. Access your website!

**Video Tutorial Available:** [Link to video if you have one]

---

## 📞 Need Help?

### Common Issues:

1. **Docker not found?**
   - The script will install it automatically
   - Or run: `curl -fsSL https://get.docker.com | sh`

2. **Build fails?**
   - Check you have all project files
   - Verify package.json exists
   - Check available disk space: `df -h`

3. **Can't access website?**
   - Check firewall: `sudo ufw status`
   - Verify container running: `docker compose ps`
   - Check logs: `docker compose logs`

4. **SSL not working?**
   - Verify DNS is configured correctly
   - Wait for DNS propagation (15-60 minutes)
   - Run: `sudo certbot --nginx -d your-domain.com`

---

## ✅ Pre-Deployment Checklist

- [ ] Ubuntu server ready (20.04+)
- [ ] SSH access working
- [ ] All project files prepared
- [ ] .env file updated with your values
- [ ] Domain purchased (for production)
- [ ] DNS ready to configure
- [ ] SSL certificate plan (Let's Encrypt is free)

---

## 🎯 Deployment Timeline

### Using `deploy.sh` (Recommended)
- Server setup: 5 minutes
- Docker installation: 3 minutes
- Application build: 5-10 minutes
- Nginx & SSL: 5 minutes
- **Total: 20-25 minutes**

### Using `quick-start.sh`
- Quick deployment: 5 minutes
- **Total: 5 minutes**
- (Manual Nginx/SSL configuration later)

---

## 📊 Server Requirements

### Minimum:
- CPU: 1 core
- RAM: 2GB
- Storage: 20GB
- Ubuntu: 20.04+

### Recommended:
- CPU: 2 cores
- RAM: 4GB
- Storage: 40GB
- Ubuntu: 22.04 LTS

---

## 🔐 Security Notes

- Scripts include firewall configuration
- SSL/HTTPS setup included
- Non-root user execution
- Docker security best practices
- Regular updates recommended

---

## 🚀 Ready to Deploy?

1. **Choose your deployment method:**
   - Full deployment: `./deploy.sh`
   - Quick deploy: `./quick-start.sh`

2. **Follow the prompts**

3. **Wait for completion**

4. **Access your website!**

---

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Docker Documentation](https://docs.docker.com)
- [Ubuntu Server Guide](https://ubuntu.com/server/docs)
- [Let's Encrypt](https://letsencrypt.org)
- [Nginx Documentation](https://nginx.org/en/docs/)

---

## 🎉 Success!

Once deployed, your website will:
- ✅ Run automatically on server start
- ✅ Restart if it crashes
- ✅ Be accessible 24/7
- ✅ Handle traffic efficiently
- ✅ Be secure with HTTPS (if configured)

**Enjoy your live website!** 🎊

---

## 📝 Version Info

- **Package Version:** 1.0.0
- **Last Updated:** November 2025
- **Next.js Version:** 15.4.3
- **Node Version:** 18 LTS

---

## 📄 License

This deployment package is provided as-is for the Affordable Home Services project.

For support, refer to the DEPLOYMENT_GUIDE.md or check the logs.

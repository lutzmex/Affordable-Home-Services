# 🚀 Affordable Home Services - Server Deployment Guide

## 📋 Complete Deployment Guide for Ubuntu Server

This guide will help you deploy your Next.js website on an Ubuntu server using Docker.

---

## 🎯 Prerequisites

### Server Requirements:
- **Ubuntu Server** 20.04 or later (22.04 recommended)
- **RAM**: Minimum 2GB (4GB recommended)
- **Storage**: Minimum 20GB free space
- **Internet**: Stable connection
- **Access**: Root or sudo privileges

### Your Local Machine:
- SSH client (Terminal on Mac/Linux, PuTTY on Windows)
- Your project files ready to upload

---

## 📝 Step-by-Step Deployment Instructions

### STEP 1: Connect to Your Server

```bash
# Connect via SSH (replace with your details)
ssh ubuntu@your-server-ip

# If using a key file:
ssh -i /path/to/your-key.pem ubuntu@your-server-ip
```

---

### STEP 2: Create Project Directory

```bash
# Create directory for your project
mkdir -p /home/ubuntu/affordablehomeservices
cd /home/ubuntu/affordablehomeservices
```

---

### STEP 3: Upload Your Project Files

You have several options to upload files:

#### Option A: Using SCP (from your local machine)

```bash
# Upload entire project (run this on your LOCAL machine)
scp -r /path/to/your/project/* ubuntu@your-server-ip:/home/ubuntu/affordablehomeservices/

# If using key file:
scp -i /path/to/key.pem -r /path/to/your/project/* ubuntu@your-server-ip:/home/ubuntu/affordablehomeservices/
```

#### Option B: Using SFTP

```bash
# Connect via SFTP
sftp ubuntu@your-server-ip

# Navigate and upload
cd /home/ubuntu/affordablehomeservices
put -r /local/path/to/project/*
```

#### Option C: Using Git (Recommended)

```bash
# If your project is on GitHub
cd /home/ubuntu/affordablehomeservices
git clone https://github.com/yourusername/your-repo.git .

# Or if already cloned
git pull origin main
```

---

### STEP 4: Upload Deployment Files

Upload these essential files to your server:

**Required Files:**
1. ✅ `Dockerfile` - Docker configuration
2. ✅ `docker-compose.yaml` - Docker Compose configuration
3. ✅ `.env` - Environment variables
4. ✅ `deploy.sh` - Deployment script
5. ✅ `affordablehomeservices.service` - Systemd service file
6. ✅ Your entire `src` folder
7. ✅ Your entire `public` folder
8. ✅ `package.json` and `pnpm-lock.yaml`
9. ✅ All configuration files (`next.config.ts`, `tailwind.config.ts`, etc.)

**Upload these files using SCP:**

```bash
# From your local machine
scp Dockerfile docker-compose.yaml .env deploy.sh ubuntu@your-server-ip:/home/ubuntu/affordablehomeservices/
```

---

### STEP 5: Make Deploy Script Executable

```bash
# On your server
cd /home/ubuntu/affordablehomeservices
chmod +x deploy.sh
```

---

### STEP 6: Run Deployment Script

```bash
# Run the automated deployment script
./deploy.sh
```

**What the script does:**
1. ✅ Updates system packages
2. ✅ Installs Docker and Docker Compose
3. ✅ Builds your Docker image
4. ✅ Starts your application
5. ✅ Sets up auto-startup service
6. ✅ Optionally configures Nginx reverse proxy
7. ✅ Optionally sets up SSL/HTTPS
8. ✅ Optionally configures firewall

**The script will ask you:**
- Do you want to setup Nginx? → Type `y` (recommended)
- Do you want to setup SSL? → Type `y` (if DNS is ready)
- Do you want to setup firewall? → Type `y` (recommended)

---

### STEP 7: Verify Deployment

After deployment completes, verify it's working:

```bash
# Check if Docker container is running
docker compose ps

# View application logs
docker compose logs -f

# Test local access
curl http://localhost:3000

# Check systemd service status
sudo systemctl status affordablehomeservices
```

**Expected Output:**
```
● affordablehomeservices.service - Affordable Home Services Website
   Active: active (running)
```

---

### STEP 8: Configure DNS (Important!)

Point your domain to your server:

1. Go to your domain registrar (GoDaddy, Namecheap, etc.)
2. Add/Update DNS records:

```
Type: A
Name: @
Value: YOUR-SERVER-IP
TTL: 3600

Type: A
Name: www
Value: YOUR-SERVER-IP
TTL: 3600
```

3. Wait 15-60 minutes for DNS propagation

---

### STEP 9: Setup SSL Certificate (After DNS is Ready)

```bash
# Once DNS is propagated, run:
sudo certbot --nginx -d affordablehomeservices.com -d www.affordablehomeservices.com
```

Your website will now be accessible at:
- ✅ https://affordablehomeservices.com

---

## 🔧 Management Commands

### Service Management

```bash
# Check status
sudo systemctl status affordablehomeservices

# Start service
sudo systemctl start affordablehomeservices

# Stop service
sudo systemctl stop affordablehomeservices

# Restart service
sudo systemctl restart affordablehomeservices

# View service logs
sudo journalctl -u affordablehomeservices -f
```

### Docker Management

```bash
# View running containers
docker compose ps

# View logs (live)
docker compose logs -f

# View logs (last 100 lines)
docker compose logs --tail=100

# Restart application
docker compose restart

# Stop application
docker compose down

# Rebuild and restart
docker compose up -d --build

# Clean up unused images
docker system prune -f
```

---

## 🔄 How to Update Your Website

When you make changes to your code:

### Option 1: Using Git (Recommended)

```bash
cd /home/ubuntu/affordablehomeservices

# Pull latest changes
git pull origin main

# Rebuild and restart
docker compose up -d --build
```

### Option 2: Manual Upload

```bash
# Upload changed files from local machine
scp -r /path/to/changed/files ubuntu@your-server-ip:/home/ubuntu/affordablehomeservices/

# On server, rebuild
cd /home/ubuntu/affordablehomeservices
docker compose up -d --build
```

### Option 3: Using Systemd Service

```bash
# Restart service (will rebuild automatically)
sudo systemctl restart affordablehomeservices
```

---

## 🐛 Troubleshooting

### Problem: Application won't start

```bash
# Check logs for errors
docker compose logs

# Check if port 3000 is in use
sudo lsof -i :3000

# Rebuild without cache
docker compose build --no-cache
docker compose up -d
```

### Problem: "Permission denied" errors

```bash
# Add user to docker group
sudo usermod -aG docker $USER

# Log out and log back in, or run:
newgrp docker
```

### Problem: Out of memory during build

```bash
# Increase swap space
sudo fallocate -l 4G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile

# Make it permanent
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```

### Problem: Website not accessible

```bash
# Check if container is running
docker compose ps

# Check Nginx status
sudo systemctl status nginx

# Check Nginx configuration
sudo nginx -t

# Check firewall
sudo ufw status
```

### Problem: SSL certificate issues

```bash
# Verify DNS is pointing correctly
nslookup affordablehomeservices.com

# Retry certbot
sudo certbot --nginx -d affordablehomeservices.com -d www.affordablehomeservices.com

# Check certificate
sudo certbot certificates
```

---

## 📊 Monitoring

### Check Application Health

```bash
# Container health status
docker compose ps

# Application logs
docker compose logs -f

# System resources
docker stats

# Nginx access logs
sudo tail -f /var/log/nginx/affordablehomeservices.com-access.log

# Nginx error logs
sudo tail -f /var/log/nginx/affordablehomeservices.com-error.log
```

---

## 🔐 Security Best Practices

1. **Keep system updated:**
```bash
sudo apt-get update && sudo apt-get upgrade -y
```

2. **Enable automatic security updates:**
```bash
sudo apt-get install unattended-upgrades
sudo dpkg-reconfigure -plow unattended-upgrades
```

3. **Configure SSH key authentication:**
```bash
# Disable password authentication in SSH
sudo nano /etc/ssh/sshd_config
# Set: PasswordAuthentication no
sudo systemctl restart sshd
```

4. **Regular backups:**
```bash
# Backup your project
tar -czf backup-$(date +%Y%m%d).tar.gz /home/ubuntu/affordablehomeservices
```

---

## 📁 File Structure on Server

```
/home/ubuntu/affordablehomeservices/
├── src/                          # Your source code
│   ├── app/
│   ├── components/
│   └── ...
├── public/                       # Static assets
├── node_modules/                 # Dependencies (generated)
├── .next/                        # Build output (generated)
├── Dockerfile                    # Docker configuration
├── docker-compose.yaml           # Docker Compose config
├── .env                          # Environment variables
├── package.json                  # Dependencies
├── pnpm-lock.yaml               # Lock file
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind configuration
└── deploy.sh                    # Deployment script
```

---

## 🎯 Quick Reference

### Essential URLs:
- **Local**: http://localhost:3000
- **Public**: http://your-server-ip:3000
- **Domain**: https://affordablehomeservices.com

### Essential Commands:
```bash
# Quick restart
docker compose restart

# View logs
docker compose logs -f

# Check status
sudo systemctl status affordablehomeservices

# Rebuild everything
docker compose down
docker compose up -d --build
```

---

## 📞 Need Help?

If you encounter issues:

1. Check application logs: `docker compose logs -f`
2. Check service status: `sudo systemctl status affordablehomeservices`
3. Check Nginx logs: `sudo tail -f /var/log/nginx/error.log`
4. Verify DNS: `nslookup affordablehomeservices.com`
5. Test local access: `curl http://localhost:3000`

---

## ✅ Deployment Checklist

- [ ] Server provisioned (Ubuntu 20.04+)
- [ ] SSH access working
- [ ] Project files uploaded
- [ ] Deploy script executed
- [ ] Application running (check with `docker compose ps`)
- [ ] Local access working (http://localhost:3000)
- [ ] DNS configured
- [ ] Nginx configured
- [ ] SSL certificate installed
- [ ] Firewall configured
- [ ] Auto-startup enabled
- [ ] Website accessible via domain

---

## 🎉 Success!

Your website is now deployed and running on your Ubuntu server!

**Auto-startup is enabled** - Your website will automatically start when the server boots.

**Monitoring**: Keep an eye on logs and system resources to ensure smooth operation.

**Enjoy your live website!** 🚀

# 📋 Deployment Checklist

## ✅ Pre-Deployment

### Server Preparation
- [ ] Ubuntu server provisioned (20.04 or later)
- [ ] SSH access configured and working
- [ ] Server has at least 2GB RAM
- [ ] Server has at least 20GB free storage
- [ ] Server IP address noted: ___________________

### Domain & DNS
- [ ] Domain name purchased
- [ ] Domain name: ___________________
- [ ] Domain registrar login ready
- [ ] Ready to update DNS records

### Project Files
- [ ] All project files downloaded
- [ ] `src/` folder complete
- [ ] `public/` folder complete
- [ ] `package.json` present
- [ ] `pnpm-lock.yaml` present
- [ ] All config files present

### Environment Configuration
- [ ] `.env` file updated with correct values
- [ ] Site URL configured
- [ ] Google Analytics ID added
- [ ] Business contact info added

---

## 📤 File Upload

### Required Files to Upload
- [ ] `Dockerfile`
- [ ] `docker-compose.yaml`
- [ ] `.env`
- [ ] `.dockerignore`
- [ ] `deploy.sh`
- [ ] `quick-start.sh`
- [ ] `affordablehomeservices.service`
- [ ] Entire `src/` folder
- [ ] Entire `public/` folder
- [ ] `package.json`
- [ ] `pnpm-lock.yaml`
- [ ] `next.config.ts`
- [ ] `tailwind.config.ts`
- [ ] `tsconfig.json`
- [ ] All other config files

### Upload Method Used
- [ ] SCP
- [ ] SFTP
- [ ] Git clone
- [ ] Other: ___________________

---

## 🚀 Deployment Steps

### Initial Setup
- [ ] Connected to server via SSH
- [ ] Created project directory: `/home/ubuntu/affordablehomeservices`
- [ ] Changed to project directory
- [ ] All files uploaded successfully

### Running Deployment
- [ ] Made `deploy.sh` executable: `chmod +x deploy.sh`
- [ ] Started deployment: `./deploy.sh`
- [ ] Watched deployment progress
- [ ] Deployment completed without errors

### Deployment Options Selected
- [ ] Docker installed
- [ ] Application built and started
- [ ] Systemd service configured
- [ ] Nginx reverse proxy: Yes / No
- [ ] SSL certificate: Yes / No / Later
- [ ] Firewall configured: Yes / No

---

## ✓ Post-Deployment Verification

### Application Status
- [ ] Container is running: `docker compose ps`
- [ ] No errors in logs: `docker compose logs`
- [ ] Service is active: `sudo systemctl status affordablehomeservices`
- [ ] Service enabled for auto-start

### Local Access
- [ ] Website accessible at: http://localhost:3000
- [ ] Website accessible at: http://SERVER-IP:3000
- [ ] Homepage loads correctly
- [ ] No JavaScript errors in browser console

### DNS Configuration
- [ ] A record added for root domain (@)
- [ ] A record added for www subdomain
- [ ] DNS propagation started
- [ ] DNS propagation complete (15-60 minutes)
- [ ] Domain resolves to server IP

### Nginx & SSL
- [ ] Nginx installed and running
- [ ] Nginx configuration created
- [ ] Website accessible via domain (HTTP)
- [ ] SSL certificate installed
- [ ] Website accessible via HTTPS
- [ ] HTTP redirects to HTTPS
- [ ] SSL certificate auto-renewal configured

### Firewall
- [ ] UFW enabled
- [ ] SSH allowed (port 22)
- [ ] HTTP allowed (port 80)
- [ ] HTTPS allowed (port 443)
- [ ] Application port allowed (port 3000) - optional

---

## 🔧 Testing

### Functional Testing
- [ ] Homepage loads
- [ ] Navigation works
- [ ] Contact form works
- [ ] All service pages load
- [ ] Images display correctly
- [ ] Responsive design works on mobile
- [ ] All internal links work
- [ ] Google Analytics tracking works

### Performance Testing
- [ ] Page load time < 3 seconds
- [ ] Images optimized and load quickly
- [ ] No console errors
- [ ] Lighthouse score > 90 (optional)

---

## 📊 Monitoring Setup

### Initial Monitoring
- [ ] Bookmark application URL
- [ ] Bookmark server IP for SSH
- [ ] Save admin credentials securely
- [ ] Document any special configurations

### Regular Checks
- [ ] Know how to view logs: `docker compose logs -f`
- [ ] Know how to restart: `docker compose restart`
- [ ] Know service status command
- [ ] Bookmark documentation

---

## 🔐 Security Checklist

- [ ] Using non-root user for deployment
- [ ] Firewall configured
- [ ] SSH key authentication enabled
- [ ] Password authentication disabled (recommended)
- [ ] SSL/HTTPS enabled
- [ ] Regular updates planned
- [ ] Backup strategy planned

---

## 📝 Documentation

- [ ] Server IP documented
- [ ] SSH login credentials saved
- [ ] Domain registrar login saved
- [ ] SSL certificate details noted
- [ ] Deployment date recorded: ___________________
- [ ] Any customizations documented

---

## 🆘 Emergency Contacts

### Key Information
```
Server IP: ___________________
Domain: affordablehomeservices.com
Project Directory: /home/ubuntu/affordablehomeservices
SSH User: ubuntu
Service Name: affordablehomeservices
```

### Important Commands
```bash
# View logs
docker compose logs -f

# Restart application
docker compose restart

# Check service status
sudo systemctl status affordablehomeservices

# Restart service
sudo systemctl restart affordablehomeservices
```

---

## 🎯 Success Criteria

Deployment is successful when:
- ✅ Application runs without errors
- ✅ Website is accessible via domain
- ✅ HTTPS is working (green padlock)
- ✅ Auto-startup is configured
- ✅ All pages load correctly
- ✅ Performance is acceptable
- ✅ Monitoring is in place

---

## 📅 Post-Deployment Tasks

### Within 24 Hours
- [ ] Test all website functionality
- [ ] Submit sitemap to Google Search Console
- [ ] Test contact forms
- [ ] Verify Google Analytics tracking
- [ ] Check mobile responsiveness

### Within 1 Week
- [ ] Monitor server resources
- [ ] Check for any errors in logs
- [ ] Test backup/restore procedure
- [ ] Document any issues encountered
- [ ] Plan for regular maintenance

### Ongoing
- [ ] Weekly: Check logs for errors
- [ ] Monthly: Review server resources
- [ ] Monthly: Check SSL certificate expiry
- [ ] Quarterly: Update dependencies
- [ ] As needed: Deploy updates

---

## ✅ Final Sign-Off

**Deployment completed by:** ___________________

**Date:** ___________________

**Status:** Success / Issues (describe below)

**Notes:**
___________________________________________________
___________________________________________________
___________________________________________________

---

## 📞 Support Resources

- **Deployment Guide:** DEPLOYMENT_GUIDE.md
- **Docker Docs:** https://docs.docker.com
- **Next.js Docs:** https://nextjs.org/docs
- **Ubuntu Server:** https://ubuntu.com/server/docs

---

**🎉 Congratulations on your successful deployment!**

#!/bin/bash
# =====================================================
# Quick Start Script - Affordable Home Services
# =====================================================
# This is a simplified version for quick deployment

set -e

echo "=================================="
echo "🚀 Quick Deploy - Affordable Home Services"
echo "=================================="
echo ""

# Check if running as root
if [[ $EUID -eq 0 ]]; then
    echo "❌ Please run as regular user (not root)"
    exit 1
fi

PROJECT_DIR="/home/ubuntu/affordablehomeservices"

# Check if in project directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found!"
    echo ""
    echo "Please ensure you're in the project directory:"
    echo "cd $PROJECT_DIR"
    exit 1
fi

echo "✓ Project files found"
echo ""

# Install Docker if needed
if ! command -v docker &> /dev/null; then
    echo "📦 Installing Docker..."
    curl -fsSL https://get.docker.com -o get-docker.sh
    sudo sh get-docker.sh
    sudo usermod -aG docker $USER
    rm get-docker.sh
    echo "✓ Docker installed"
fi

# Stop existing containers
echo "🛑 Stopping existing containers..."
docker compose down 2>/dev/null || true

# Build and start
echo "🔨 Building application..."
docker compose build --no-cache

echo "🚀 Starting application..."
docker compose up -d

# Wait for startup
echo "⏳ Waiting for application to start..."
sleep 15

# Check status
if docker compose ps | grep -q "Up"; then
    echo ""
    echo "=================================="
    echo "✅ SUCCESS! Application is running!"
    echo "=================================="
    echo ""
    echo "Access your website:"
    echo "  • Local: http://localhost:3000"
    echo "  • Public: http://$(curl -s ifconfig.me):3000"
    echo ""
    echo "Useful commands:"
    echo "  • View logs: docker compose logs -f"
    echo "  • Restart: docker compose restart"
    echo "  • Stop: docker compose down"
    echo ""
else
    echo "❌ Failed to start. Check logs:"
    echo "docker compose logs"
    exit 1
fi

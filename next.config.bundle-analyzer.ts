import withBundleAnalyzer from '@next/bundle-analyzer';
import type { NextConfig } from 'next';

// Base configuration (import from your main config)
const baseConfig: NextConfig = {
  // Performance optimizations
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  
  compress: true,
  reactStrictMode: true,
  poweredByHeader: false,
  
  // ✅ ENABLE source maps for bundle analysis
  productionBrowserSourceMaps: true,
  
  serverExternalPackages: ['sharp'],
  
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      '@radix-ui/react-icons',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-accordion',
      '@radix-ui/react-tabs',
      '@radix-ui/react-toast',
      '@radix-ui/react-tooltip',
      '@radix-ui/react-avatar',
      '@radix-ui/react-checkbox',
      '@radix-ui/react-label',
      '@radix-ui/react-popover',
      '@radix-ui/react-progress',
      '@radix-ui/react-radio-group',
      '@radix-ui/react-scroll-area',
      '@radix-ui/react-select',
      '@radix-ui/react-separator',
      '@radix-ui/react-slider',
      '@radix-ui/react-switch',
      'recharts',
      'date-fns',
      'react-hook-form',
      'zod'
    ],
    optimizeCss: true,
    scrollRestoration: true,
  },
  
  images: {
    loader: 'default',
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 768, 1024, 1280, 1408],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      { protocol: 'https', hostname: 'affordablehomeservices.com', pathname: '/**' },
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'placehold.co', pathname: '/**' },
      { protocol: 'https', hostname: '*.googleapis.com', pathname: '/**' },
      { protocol: 'https', hostname: '*.gstatic.com', pathname: '/**' }
    ],
    unoptimized: false,
  },
  
  webpack: (config, { dev, isServer }) => {
    // Enhanced bundle splitting for analysis
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000,
        maxSize: 244000,
        cacheGroups: {
          default: false,
          vendors: false,
          
          // React framework
          react: {
            name: 'react',
            chunks: 'all',
            test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
            priority: 40,
            enforce: true,
          },
          
          // UI framework
          radix: {
            name: 'radix-ui',
            chunks: 'all',
            test: /[\\/]node_modules[\\/]@radix-ui[\\/]/,
            priority: 35,
            enforce: true,
          },
          
          // Icons and utilities
          icons: {
            name: 'icons',
            chunks: 'all',
            test: /[\\/]node_modules[\\/](lucide-react|@radix-ui\/react-icons)[\\/]/,
            priority: 30,
            enforce: true,
          },
          
          // Form libraries
          forms: {
            name: 'forms',
            chunks: 'all',
            test: /[\\/]node_modules[\\/](react-hook-form|@hookform|zod)[\\/]/,
            priority: 25,
            enforce: true,
          },
          
          // Charts
          charts: {
            name: 'charts',
            chunks: 'all',
            test: /[\\/]node_modules[\\/](recharts|d3-)[\\/]/,
            priority: 25,
            enforce: true,
          },
          
          // Date utilities
          dates: {
            name: 'date-utils',
            chunks: 'all',
            test: /[\\/]node_modules[\\/](date-fns|react-day-picker)[\\/]/,
            priority: 20,
            enforce: true,
          },
          
          // Styling utilities
          styles: {
            name: 'styles',
            chunks: 'all',
            test: /[\\/]node_modules[\\/](clsx|class-variance-authority|tailwind-merge|tailwindcss-animate)[\\/]/,
            priority: 20,
            enforce: true,
          },
          
          // Other vendor code
          vendor: {
            name: 'vendor',
            chunks: 'all',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            minChunks: 1,
            reuseExistingChunk: true,
          },
          
          // Common app code
          common: {
            name: 'common',
            chunks: 'all',
            minChunks: 2,
            priority: 5,
            reuseExistingChunk: true,
          },
        },
      };
    }
    
    // SVG handling
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    
    return config;
  },
  
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://*.googletagmanager.com https://*.google-analytics.com https://*.googleapis.com https://www.google.com https://www.gstatic.com https://*.doubleclick.net",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com",
              "img-src 'self' data: blob: https: http:",
              "font-src 'self' https://fonts.gstatic.com https://fonts.googleapis.com data:",
              "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://region1.google-analytics.com https://*.doubleclick.net",
              "frame-src 'self' https://*.google.com https://*.doubleclick.net https://www.googletagmanager.com",
              "media-src 'self' data: blob:",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "upgrade-insecure-requests"
            ].join('; ')
          },
        ],
      },
      {
        source: '/_next/static/css/:path*',
        headers: [
          { key: 'Content-Type', value: 'text/css; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/_next/static/chunks/:path*',
        headers: [
          { key: 'Content-Type', value: 'application/javascript; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
  
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn', 'info'],
    } : false,
  },
  
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://affordablehomeservices.com',
    NEXT_PUBLIC_SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME || 'Affordable Home Services',
  },
};

// Bundle analyzer configuration
const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: true,
});

export default bundleAnalyzer(baseConfig);
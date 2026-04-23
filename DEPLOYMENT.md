# 🚀 Deployment Guide

## Quick Start - Deploy to Vercel (Recommended)

### Method 1: Deploy via Vercel Dashboard (Easiest)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - UBJ Houseboats"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Done! Your site is live 🎉

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## 📋 Pre-Deployment Checklist

- ✅ All unnecessary files removed
- ✅ Images optimized
- ✅ Meta tags updated with correct URLs
- ✅ Contact information verified
- ✅ All links tested
- ✅ Mobile responsiveness checked
- ✅ SEO tags configured

## 🔧 Environment Variables (Optional)

If you need to set environment variables:

1. In Vercel Dashboard:
   - Go to Project Settings
   - Navigate to Environment Variables
   - Add your variables

2. Via CLI:
   ```bash
   vercel env add PORT
   ```

## 🌐 Custom Domain Setup

1. **In Vercel Dashboard**
   - Go to Project Settings
   - Click "Domains"
   - Add your custom domain (e.g., ubjhouseboats.com)
   - Follow DNS configuration instructions

2. **DNS Configuration**
   - Add A record: `76.76.21.21`
   - Add CNAME record: `cname.vercel-dns.com`

## 📊 Post-Deployment

### 1. Test Your Site
- ✅ Check all pages load correctly
- ✅ Test all links and buttons
- ✅ Verify WhatsApp links work
- ✅ Test on mobile devices
- ✅ Check contact information

### 2. SEO Setup
- Submit sitemap to Google Search Console
- Verify site ownership
- Submit to Bing Webmaster Tools
- Add to Google My Business

### 3. Analytics (Optional)
Add Google Analytics or Plausible:
```html
<!-- Add before </head> in index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

### 4. Performance Monitoring
- Use [PageSpeed Insights](https://pagespeed.web.dev/)
- Check [GTmetrix](https://gtmetrix.com/)
- Monitor with [Vercel Analytics](https://vercel.com/analytics)

## 🔄 Continuous Deployment

Once connected to GitHub, Vercel automatically deploys:
- **Production**: Pushes to `main` branch
- **Preview**: Pull requests and other branches

## 🐛 Troubleshooting

### Build Fails
```bash
# Check Node version
node --version  # Should be >= 14.x

# Test locally first
npm start
```

### Images Not Loading
- Verify all image paths are relative
- Check file names match exactly (case-sensitive)
- Ensure images are in `/assets` folder

### 404 Errors
- Check `vercel.json` configuration
- Verify `server.js` is working locally
- Check route configurations

## 📱 Mobile Testing

Test on real devices:
- iOS Safari
- Android Chrome
- Different screen sizes
- Touch interactions
- WhatsApp links

## 🔒 Security

- ✅ HTTPS enabled by default on Vercel
- ✅ No sensitive data in code
- ✅ Environment variables for secrets
- ✅ Regular dependency updates

## 📈 Performance Tips

1. **Image Optimization**
   - Convert to WebP format
   - Use appropriate sizes
   - Lazy load below-fold images

2. **Caching**
   - Vercel handles caching automatically
   - Static assets cached at edge

3. **Monitoring**
   - Enable Vercel Analytics
   - Monitor Core Web Vitals
   - Track user interactions

## 🆘 Support

If you encounter issues:
1. Check Vercel deployment logs
2. Test locally with `npm start`
3. Review error messages
4. Check Vercel documentation

## 🎉 Success!

Your site should now be live at:
- Vercel URL: `https://your-project.vercel.app`
- Custom domain: `https://ubjhouseboats.com` (if configured)

Share your site and start receiving inquiries! 🚤

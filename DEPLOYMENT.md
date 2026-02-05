# Deployment Guide - Vercel CI/CD

This guide will help you deploy LocalServiceHub to Vercel with automatic CI/CD.

## Prerequisites

- GitHub repository: `irfanrosly/nadago-services` (already set up ✅)
- Vercel account (free tier works perfectly)

## Step-by-Step Deployment

### 1. Create Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Sign up with your GitHub account (recommended for easy integration)

### 2. Import Your Project

1. In Vercel dashboard, click **"Add New..."** → **"Project"**
2. Find and select your repository: `irfanrosly/nadago-services`
3. Click **"Import"**

### 3. Configure Build Settings

Vercel will auto-detect Next.js, but verify these settings:

- **Framework Preset:** Next.js
- **Root Directory:** `./` (leave as default)
- **Build Command:** `npm run build` (auto-detected)
- **Output Directory:** `.next` (auto-detected)
- **Install Command:** `npm install` (auto-detected)
- **Node.js Version:** 18.x or 20.x (auto-selected)

### 4. Deploy

1. Click **"Deploy"**
2. Wait ~2 minutes for the build to complete
3. Your site is now live! 🎉

## CI/CD Setup (Automatic)

Once connected, Vercel automatically sets up:

### Automatic Deployments

- **Production:** Every push to `main` branch triggers a production deployment
- **Preview:** Every pull request gets its own preview URL
- **Branch Deployments:** Each branch gets a unique preview URL

### Workflow

```
Git Push → GitHub → Vercel Webhook → Auto Build → Auto Deploy → Live Site
```

### Deployment URLs

After first deployment, you'll get:
- **Production:** `https://nadago-services.vercel.app` (or your custom domain)
- **Preview:** `https://nadago-services-git-branch-name.vercel.app`

## Managing Deployments

### View Deployments

1. Go to your project in Vercel dashboard
2. Click on "Deployments" tab
3. See all deployments with status, commit, and timing

### Rollback

1. Go to Deployments tab
2. Find the deployment you want to rollback to
3. Click "..." menu → "Promote to Production"

### Environment Variables

No environment variables needed for this project. If you add any later:

1. Go to Project Settings → Environment Variables
2. Add variables for Production, Preview, and Development
3. Redeploy for changes to take effect

## Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Vercel automatically provisions SSL certificate

## Monitoring & Analytics

Vercel provides:
- **Analytics:** Page views, performance metrics
- **Logs:** Real-time function and build logs
- **Speed Insights:** Core Web Vitals monitoring

## Troubleshooting

### Build Fails

1. Check build logs in Vercel dashboard
2. Verify `package.json` has all dependencies
3. Ensure Node.js version is compatible (18.x or 20.x)

### CSV Not Loading

1. Verify `public/service-list.csv` exists in repository
2. Check file is committed to git
3. File should be accessible at `/service-list.csv` in production

### Performance Issues

1. Check Vercel Analytics for bottlenecks
2. Verify images/assets are optimized
3. Review Next.js build output for warnings

## Next Steps

After deployment:

1. ✅ Test the live site
2. ✅ Share the URL with users
3. ✅ Set up custom domain (optional)
4. ✅ Enable Vercel Analytics (optional)
5. ✅ Configure automatic deployments for other branches (optional)

## Support

- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)
- Project Issues: GitHub repository issues

---

**Ready to deploy?** Just push your code to GitHub and Vercel will handle the rest! 🚀

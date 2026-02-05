# LocalServiceHub

A community-driven directory that parses 'service-list.csv' to provide a searchable and filterable interface for local neighborhood services.

## Features

- 📱 **Mobile-first design** - Optimized for quick on-the-go access
- 🔍 **Search functionality** - Search across service names, categories, and locations
- 🏷️ **Category filtering** - Filter by one or more service categories
- 📞 **Direct calling** - Click-to-call phone numbers using tel: protocol
- 📊 **Live stats** - See how many services match your filters
- ⚡ **Performance optimized** - Uses useMemo for efficient filtering

## Tech Stack

- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (Icons)
- **PapaParse** (CSV parsing)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Data Format

The application expects a CSV file at `/public/service-list.csv` with the following columns:
- `ID` - Unique record identifier (number)
- `Category` - Type of service (string)
- `Service Provider/Name` - Business or provider name (string)
- `Contact Number` - Phone number(s) (string)
- `Notes/Location` - Additional details or location info (string, optional)

## Project Structure

```
├── app/
│   ├── components/       # React components
│   ├── hooks/           # Custom React hooks
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Main page
│   └── types.ts         # TypeScript types
├── public/
│   └── service-list.csv # Service data
└── prd.json            # Product requirements document
```

## Building for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

This project is configured for automatic deployment to Vercel with CI/CD.

### Automatic CI/CD Setup (Recommended)

1. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click "Add New Project"
   - Import your GitHub repository: `irfanrosly/nadago-services`
   - Vercel will auto-detect Next.js settings

2. **Configure Project:**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install` (auto-detected)

3. **Deploy:**
   - Click "Deploy"
   - Your site will be live in ~2 minutes!

### CI/CD Features

Once connected, Vercel automatically:
- ✅ Deploys every push to `main` branch
- ✅ Creates preview deployments for pull requests
- ✅ Runs builds automatically
- ✅ Provides instant rollback capabilities
- ✅ SSL certificates included

### Manual Deployment (Alternative)

If you prefer CLI deployment:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# For production
vercel --prod
```

### Environment Variables

No environment variables are required for this project.

### Post-Deployment

After deployment, your site will be available at:
- Production: `https://your-project-name.vercel.app`
- Preview: `https://your-project-name-git-branch.vercel.app`

You can also add a custom domain in Vercel project settings.

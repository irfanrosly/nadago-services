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

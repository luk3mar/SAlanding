# Swing Accelerate Landing Page

A production-ready Next.js landing page for Swing Accelerate, a Discord community for swing traders.

## Features

- **Next.js 14** with App Router and TypeScript
- **Tailwind CSS** with shadcn/ui components
- **Responsive design** (mobile-first)
- **SEO optimized** with metadata and JSON-LD
- **Accessible** with proper ARIA labels and focus states
- **Fast loading** with no blocking scripts

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Customization

### 1. Update Site Configuration

Edit `lib/constants.ts` to customize:

- **Whop URL**: Replace with your actual Whop product link
- **Google Sheet URL**: Add your backtest tracking sheet
- **Social Links**: Update YouTube, Twitter, and email
- **Logo**: Replace `/public/logo.png` with your logo

### 2. Replace Placeholder Content

- **YouTube Videos**: Update `SAMPLE_VIDEO_IDS` in `lib/constants.ts`
- **Member Wins**: Replace placeholder images in `/public/wins/`
- **Overview Video**: Update the YouTube embed in the modal

### 3. Brand Colors

Modify the gradient colors in `lib/constants.ts`:

```typescript
export const BRAND = {
  gradientFrom: "#4F46E5", // Your primary color
  gradientTo:   "#9333EA"  // Your secondary color
};
```

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with SEO
│   └── page.tsx             # Main landing page
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── sections/            # Page sections
│   ├── GradientText.tsx     # Gradient text utility
│   └── YouTubeCarousel.tsx  # Video carousel
├── lib/
│   ├── constants.ts         # Site configuration
│   └── utils.ts            # Utility functions
└── public/
    ├── logo.png            # Your logo
    └── wins/               # Member win images
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Other Platforms

```bash
npm run build
npm start
```

## TODO Checklist

Before going live, make sure to:

- [ ] Replace Whop product URL
- [ ] Add Google Sheet URL for backtests
- [ ] Upload your logo
- [ ] Replace YouTube video IDs
- [ ] Add real member win images
- [ ] Update email address
- [ ] Test all links and forms
- [ ] Verify mobile responsiveness

## Legal Compliance

The page includes proper disclaimers:
- Educational purposes only
- No financial advice
- Trading involves risk
- No profit guarantees
- Past results don't guarantee future results

## Support

For questions or issues, contact: support@yourdomain.com

---

Built with ❤️ for the Swing Accelerate community


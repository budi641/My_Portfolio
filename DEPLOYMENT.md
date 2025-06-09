# Deployment Guide for GitHub Pages

This guide will help you deploy your portfolio to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Git installed on your local machine
3. Node.js and npm installed

## Setup Instructions

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `My_Portfolio` (or update the `basePath` in `next.config.mjs` to match your repo name)
3. Make sure it's public (required for GitHub Pages on free accounts)

### 2. Clone and Setup Local Repository

\`\`\`bash
# Clone your repository
git clone https://github.com/YOUR_USERNAME/My_Portfolio.git
cd My_Portfolio

# Copy your project files to this directory
# Make sure all the files from the portfolio are in the root

# Install dependencies
npm install
\`\`\`

### 3. Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**

### 4. Deploy

\`\`\`bash
# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio deployment"

# Push to main branch
git push origin main
\`\`\`

The GitHub Action will automatically build and deploy your site. You can monitor the progress in the **Actions** tab of your repository.

### 5. Access Your Site

Once deployed, your site will be available at:
\`\`\`
https://YOUR_USERNAME.github.io/My_Portfolio/
\`\`\`

## Local Development

To run the project locally:

\`\`\`bash
# Development server
npm run dev

# Build for production
npm run build

# Test production build locally
npm run start
\`\`\`

## Updating Your Portfolio

To update your portfolio:

1. Make your changes locally
2. Test with `npm run dev`
3. Commit and push your changes:

\`\`\`bash
git add .
git commit -m "Update portfolio"
git push origin main
\`\`\`

The site will automatically rebuild and deploy.

## Troubleshooting

### Common Issues

1. **404 Error**: Make sure the repository name matches the `basePath` in `next.config.mjs`

2. **Assets not loading**: Ensure `assetPrefix` is correctly set in `next.config.mjs`

3. **Build fails**: Check the Actions tab for error details

4. **Images not displaying**: Make sure all image paths are correct and images are in the `public` folder

### Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public` folder with your domain name
2. Configure your domain's DNS to point to GitHub Pages
3. Update the `assetPrefix` and `basePath` in `next.config.mjs` accordingly

## File Structure

\`\`\`
My_Portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── app/
├── components/
├── hooks/
├── lib/
├── public/
├── next.config.mjs
├── package.json
├── tailwind.config.ts
└── DEPLOYMENT.md
\`\`\`

## Environment Variables

If you need environment variables for production:

1. Go to repository **Settings** > **Secrets and variables** > **Actions**
2. Add your secrets (e.g., `NEXT_PUBLIC_API_KEY`)
3. Reference them in the GitHub Action workflow if needed

## Performance Tips

1. Optimize images before adding them to `public/images/`
2. Use WebP format for better compression
3. Keep the bundle size minimal
4. Test on mobile devices

Your portfolio should now be live on GitHub Pages! 🚀

# Yail Landing Page

## Project Overview

Yail is a modern, responsive landing page website designed to showcase a premium fish product. The site serves as a marketing platform that highlights the product's quality, sourcing, and value to potential customers.

### Purpose
The website acts as the primary digital presence for the Yail brand, providing visitors with comprehensive information about the product, its origins, and how to purchase it. The landing page is crafted to engage visitors with compelling visuals and clear calls-to-action.

### Main Features

- **Hero Section**: Eye-catching introduction with product imagery and key messaging
- **About Product**: Detailed information about the fish product, its benefits, and quality standards
- **About Innovator**: Story behind the brand and the innovator/entrepreneur
- **Product Showcase**: Visual gallery showcasing the product in various forms
- **Contact Information**: Easy ways for customers to reach out and inquire
- **Responsive Navigation**: Mobile-friendly navigation menu
- **Smooth Animations**: Engaging scroll-based reveal animations using Framer Motion

### Technologies Used

- **React 19** - Modern JavaScript library for building user interfaces
- **Vite 6** - Next-generation frontend build tool for fast development
- **Tailwind CSS 4** - Utility-first CSS framework for rapid UI development
- **React Router 7** - Declarative routing for React applications
- **Framer Motion** - Production-ready animation library for React
- **React Slick** - Carousel/slider component for product showcase
- **Boafo Accessibility Widget** - Makes the site accessible to all users, including those with disabilities

### Accessibility

This project uses the **Boafo Accessibility Widget** to ensure the website is accessible to all users. The widget provides features like:
- Screen reader compatibility
- Keyboard navigation support
- High contrast modes
- Font size adjustments
- And more accessibility enhancements

## How to Get Your Boafo API Key

To use the Boafo Accessibility Widget, you'll need an API key:

1. Visit [https://boafo.co](https://boafo.co)
2. Register for an account or log in if you already have one
3. Navigate to your dashboard
4. Locate your API key in the dashboard settings
5. Copy the API key for use in your environment variables

## How to Integrate the Boafo Widget

For detailed integration instructions, please refer to the official Boafo integration guide:

**[Boafo Widget Integration Guide](https://drive.google.com/file/d/1tvwK-sBZI2a4uldd6z5LD1iLblSl3WbG/view?usp=sharing)**

This guide provides step-by-step instructions on how to properly configure and customize the accessibility widget for your specific needs.

## Setup Instructions

Follow these steps to get the project running locally:

### Prerequisites

- **Node.js** (version 18 or higher recommended)
- **npm** or **pnpm** package manager

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/GROW-YAI/yailandingpage.git
   cd yailandingpage
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

   or with pnpm:

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   Copy the example environment file to create your own:

   ```bash
   cp .env.example .env
   ```

4. **Add your Boafo API key**

   Open the `.env` file in your text editor and replace `your_api_key_here` with your actual Boafo API key:

   ```env
   VITE_BOAFO_API_KEY=boafo_your_actual_key_here
   ```

5. **Start the development server**

   ```bash
   npm run dev
   ```

   or with pnpm:

   ```bash
   pnpm dev
   ```

6. **Open your browser**

   Navigate to `http://localhost:5173` (or the URL shown in your terminal) to view the website.

### Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## Project Structure

```
yailandingpage/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images and icons
│   ├── components/     # React components
│   │   ├── Navbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── AboutProduct.jsx
│   │   ├── AboutInnovator.jsx
│   │   ├── ProductShowcase.jsx
│   │   ├── ContactInfo.jsx
│   │   ├── Footer.jsx
│   │   └── BoafoWidgetInitializer.jsx
│   ├── App.jsx         # Main app component
│   ├── App.css         # Global styles
│   ├── LandingPage.jsx # Landing page layout
│   └── main.jsx        # Entry point
├── .env                # Environment variables (not tracked by Git)
├── .env.example        # Example environment variables
├── .gitignore          # Git ignore rules
├── index.html          # HTML entry point
├── package.json        # Project dependencies
├── vite.config.js      # Vite configuration
└── README.md           # This file
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_BOAFO_API_KEY` | Your Boafo accessibility widget API key | Yes |

## Important Notes

- **Never commit your `.env` file** - It contains sensitive API keys
- Always use `.env.example` as a template for required environment variables
- The `.gitignore` file is configured to exclude all `.env*` files from version control

## License

This project is private and proprietary.

## Support

For questions or issues related to:
- **The Yail product**: Use the contact information on the website
- **Boafo Widget**: Refer to the [integration guide](https://drive.google.com/file/d/1tvwK-sBZI2a4uldd6z5LD1iLblSl3WbG/view?usp=sharing) or visit [boafo.co](https://boafo.co)
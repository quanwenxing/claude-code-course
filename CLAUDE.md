# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 application with App Router for a Claude Code course landing page. The application uses TypeScript, Tailwind CSS 4.x, and follows a modern component-based architecture.

## Development Commands

- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture and Structure

### Component Organization
- `/src/app/` - Next.js App Router pages and layouts
- `/src/components/` - Main page components (Header, HeroSection, etc.)
- `/src/components/ui/` - Reusable UI components (cards, buttons, etc.)

### Design System
- Uses Tailwind CSS with custom design tokens
- Gradient-based color scheme (blue to purple)
- Glass morphism effects with backdrop-blur
- Responsive design with mobile-first approach
- Inter font family for modern typography

### Component Architecture
- Highly modular components for maintainability
- Separation of concerns between page sections and UI components
- TypeScript interfaces for props validation
- CSS-in-JS with Tailwind classes

### Key Components
- `Header` - Fixed navigation with smooth scroll functionality
- `HeroSection` - Main landing area with gradient background
- `CourseContent` - Module-based curriculum display
- `Benefits` - Feature cards with animations
- `Instructor` - Profile and testimonials
- `Pricing` - Pricing cards with payment options
- `FAQ` - Accordion-style Q&A section
- `Footer` - Contact info and social links

### Styling Conventions
- Uses custom CSS animations (fadeInUp, pulse)
- Hover effects with transform and shadow
- Gradient backgrounds and text effects
- Glass morphism for modern aesthetics
- Responsive breakpoints following Tailwind standards

### State Management
- Uses React useState for component-level state
- No external state management (Redux, Zustand) required
- Client-side interactions for navigation and UI toggles

## Development Guidelines

### Component Creation
- Place reusable UI components in `/src/components/ui/`
- Use TypeScript interfaces for all props
- Follow the existing naming conventions
- Implement hover states and animations consistently

### Styling Guidelines
- Use Tailwind utility classes
- Leverage custom CSS classes for complex animations
- Maintain gradient color consistency (blue-purple theme)
- Ensure responsive design for all components

### Performance Considerations
- Components use Next.js App Router for optimal loading
- Images should use Next.js Image component when added
- Animations use CSS transforms for hardware acceleration
- Lazy loading implemented where beneficial
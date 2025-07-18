# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **Awesome Claude Code Mini Website** - an educational website about Claude Code designed for developers. The site combines technical depth with modern design to teach the complete use of Claude Code, from installation to advanced techniques.

## Project Goals

- Educational content about Claude Code usage
- Interactive demos and terminal simulations  
- Modern developer-focused design with dark theme
- Comprehensive coverage from basics to advanced workflows
- MCP (Model Context Protocol) deep dives

## Technology Stack

- **Framework**: Next.js 15 with React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS with CSS Variables
- **Animations**: Framer Motion + GSAP
- **Code Highlighting**: Prism.js with Monaco Editor
- **Package Manager**: pnpm
- **CI/CD**: GitHub Actions (configured)

## Development Commands

### Project Setup
```bash
pnpm install                    # Install dependencies
pnpm dev                       # Start development server
pnpm build                     # Build for production
pnpm start                     # Start production server
pnpm lint                      # Run ESLint
pnpm lint:fix                  # Fix linting issues
pnpm type-check                # TypeScript type checking
```

### Code Quality
```bash
pnpm format                    # Format with Prettier
pnpm test                      # Run tests
pnpm test:watch               # Run tests in watch mode
pnpm test:coverage            # Generate test coverage
```

## Project Structure

### Content Sections
1. **Landing Page** - Hero with interactive demo
2. **What is Claude Code** - Introduction and comparison
3. **Installation & Setup** - Getting started guide
4. **Essential Commands** - Command reference
5. **MCP Integration** - Model Context Protocol deep dive
6. **Advanced Workflows** - Complex use cases
7. **Best Practices** - Development patterns
8. **Use Cases** - Real-world examples
9. **Tool Integration** - Git, testing, deployment
10. **Resources** - Additional learning materials

### Key Features
- Terminal simulator with typing effects
- Interactive command builder
- MCP server explorer
- Workflow visualizer
- Code playground with live editing

## Development Phases

### Phase 1: Core Content (Weeks 1-2)
- Landing page implementation
- Basic installation and setup guides
- Essential commands documentation

### Phase 2: Advanced Features (Weeks 3-4)
- MCP deep dive content
- Advanced workflow examples
- Best practices documentation

### Phase 3: Interactive Features (Weeks 5-6)
- Terminal simulator component
- Interactive demos
- Command builder tool

### Phase 4: Polish & Launch (Weeks 7-8)
- Performance optimization
- SEO implementation
- Cross-browser testing

## Design System

### Color Palette
- Primary: `#00D4FF` (Cyan)
- Secondary: `#6366F1` (Indigo)
- Success: `#10B981` (Green)
- Warning: `#F59E0B` (Amber)
- Error: `#EF4444` (Red)
- Background Dark: `#0A0B0D`
- Background Light: `#1A1B23`

### Typography
- Headers: JetBrains Mono (terminal feel)
- Body: Inter (modern readability)
- Code: Fira Code (with ligatures)

## CI/CD Setup

GitHub Actions is configured for:
- Automated testing on pull requests
- Build verification
- Code quality checks
- Deployment pipeline

## Development Notes

- Use dark mode as default theme
- Implement terminal-inspired components with glow effects
- Focus on interactive elements and smooth animations
- Ensure mobile-first responsive design
- Optimize for Core Web Vitals and Lighthouse scores
- Include proper TypeScript typing throughout
# Easy Speak 2

> A modern, production-ready Next.js 15 application built with Feature-Sliced Design architecture, TypeScript, and comprehensive tooling.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15.2-black)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8)](https://tailwindcss.com/)
[![FSD](https://img.shields.io/badge/Architecture-FSD-orange)](https://feature-sliced.design/)

## 🚀 Features

- **⚡ Next.js 15** with Turbopack for ultra-fast development
- **🏗️ Feature-Sliced Design (FSD)** architecture for maintainable code
- **📱 Responsive Design** with Tailwind CSS v4
- **🌐 Internationalization** with next-intl
- **🎨 Modern UI Components** with Framer Motion animations
- **🔄 State Management** with TanStack Query (React Query)
- **🎭 Component Development** with Storybook
- **🧪 Testing Setup** with Jest and Testing Library
- **📦 Type Safety** with TypeScript 5.8
- **🎯 Code Quality** with ESLint, Prettier, and Husky
- **🌙 Theme Support** with next-themes
- **📊 Bundle Analysis** with Next.js Bundle Analyzer

## 🛠️ Tech Stack

### Core
- **Framework:** Next.js 15.2.5
- **Runtime:** React 19
- **Language:** TypeScript 5.8
- **Styling:** Tailwind CSS 4.1.4
- **Architecture:** Feature-Sliced Design (FSD)

### State & Data
- **Server State:** TanStack Query 5.80.7
- **HTTP Client:** Axios 1.8.2
- **Form Handling:** React Hook Form 7.53.1

### UI & Animation
- **Icons:** Lucide React 0.487.0
- **Animation:** Framer Motion 12.17.0
- **Notifications:** React Hot Toast 2.4.1
- **Theme:** next-themes 0.4.6

### Development Tools
- **Testing:** Jest 30.2.0 + Testing Library
- **Storybook:** 9.1.15
- **Linting:** ESLint + Prettier
- **Git hooks:** Husky + lint-staged
- **Commit convention:** Commitlint

## 📁 Project Structure (FSD)

```
src/
├── app/              # Next.js App Router
├── pages/            # Page compositions
├── widgets/          # Complex UI blocks
├── features/         # Business features
├── entities/         # Business entities
├── services/         # API services
└── shared/           # Shared resources
    ├── ui/           # UI components
    ├── lib/          # Utilities & hooks
    ├── api/          # HTTP client
    ├── config/       # Configurations
    ├── types/        # TypeScript types
    └── styles/       # Global styles
```

## 🚀 Quick Start

### Prerequisites
- Node.js >= 20.0.0
- Yarn or npm

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd easy-speak-2
```

2. **Install dependencies**
```bash
yarn install
# or
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

4. **Start development server**
```bash
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

### Development
- `yarn dev` - Start development server with Turbopack
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run linting and formatting
- `yarn format` - Format code with Prettier

### Testing
- `yarn test` - Run tests
- `yarn test:watch` - Run tests in watch mode

### Storybook
- `yarn storybook` - Start Storybook dev server
- `yarn build-storybook` - Build Storybook

### Utilities
- `yarn ngrok` - Expose local server with ngrok

## 🏗️ Architecture

This project follows **Feature-Sliced Design (FSD)** methodology:

### Layer Rules
- **app** → pages, widgets, features, entities, shared
- **pages** → widgets, features, entities, shared
- **widgets** → features, entities, shared
- **features** → entities, shared
- **entities** → shared
- **shared** → no dependencies

### Services Layer
API services are organized in `/services`:
- `postService` - Post-related operations
- `userService` - User management
- `authService` - Authentication

## 🔧 Configuration

### Environment Variables
```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### Tailwind CSS
Modern Tailwind CSS v4 with PostCSS configuration.

### TypeScript
Strict TypeScript configuration with path aliases:
- `@/` → `src/`

## 🧪 Testing

- **Unit Tests:** Jest + Testing Library
- **Component Tests:** Storybook interactions
- **E2E Tests:** Ready for Playwright/Cypress

## 📦 Build & Deployment

### Production Build
```bash
yarn build
yarn start
```

### Environment Setup
- Development: `.env.local`
- Production: Configure your deployment platform

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'feat: add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

### Commit Convention
This project follows [Conventional Commits](https://conventionalcommits.org/):
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Tests
- `chore:` - Maintenance

## 📚 Documentation

- [Feature-Sliced Design](./src/FSD_ARCHITECTURE.md)
- [API Services](./src/services/)
- [Component Library](http://localhost:6006) (Storybook)

## 🔗 Useful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Feature-Sliced Design](https://feature-sliced.design/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TanStack Query](https://tanstack.com/query/latest)

---

⭐ Star this repo if it helped you!

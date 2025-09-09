# Crab

A modern Next.js application built with TypeScript, Tailwind CSS, and pnpm.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: pnpm
- **Testing**: Vitest + Testing Library
- **Linting**: ESLint + Prettier

## Prerequisites

- Node.js 20.11.1 (use `.nvmrc` file)
- pnpm (latest version)

## Setup

1. **Clone and install dependencies**:
   ```bash
   git clone <repository-url>
   cd crab
   pnpm install
   ```

2. **Environment setup**:
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your actual values if needed.

## Development

Start the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build & Production

Build the application:
```bash
pnpm build
```

Start the production server:
```bash
pnpm start
```

## Testing & Quality

Run tests:
```bash
pnpm test
```

Run tests with UI:
```bash
pnpm test:ui
```

Lint code:
```bash
pnpm lint
```

Type check:
```bash
pnpm typecheck
```

Format code:
```bash
pnpm format
```

## API Endpoints

- `GET /api/healthz` - Health check endpoint returning `{ ok: true, version, timestamp }`

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── api/            # API routes
│   │   └── healthz/    # Health check endpoint
│   └── page.tsx        # Home page
├── test/               # Test files
│   ├── setup.ts        # Test setup
│   ├── page.test.tsx   # Page tests
│   └── healthz.test.ts # API tests
└── ...
```

## Troubleshooting

### Port Conflicts
If port 3000 is in use, Next.js will automatically use the next available port.

### Node Version Issues
Use the exact Node version specified in `.nvmrc`:
```bash
nvm use
```

### ESM/CJS Issues
This project uses Next.js 15 with Turbopack, which handles module resolution automatically.

### Build Issues
Clear Next.js cache if you encounter build issues:
```bash
rm -rf .next
pnpm build
```

## Scripts Reference

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production with Turbopack
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm typecheck` - Run TypeScript type checking
- `pnpm test` - Run tests with Vitest
- `pnpm test:ui` - Run tests with Vitest UI
- `pnpm format` - Format code with Prettier

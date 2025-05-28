# Vite Starter Kit with Supabase Auth

Modern React starter template with Supabase authentication, featuring:

- ⚡ Vite
- ⚛️ React 19
- 📘 TypeScript 5.8
- 🎨 Tailwind CSS v4
- 🔒 Supabase Auth
- 🚦 React Router v7
- 📊 TanStack Query
- 🐻 Zustand
- 🎯 Protected Routes
- 🌙 Dark Mode

## Setup

1. Clone the repository:

```bash
git clone [repository-url]
cd vite-starterkit-supabase-auth
```

2. Install dependencies:

```bash
bun install
# or
npm install
```

3. Configure environment variables:

```bash
cp .env.example .env.local
```

Then edit `.env.local` with your Supabase credentials.

4. Start the development server:

```bash
bun dev
# or
npm run dev
```

## Supabase Setup

1. Create a new Supabase project
2. Enable Email auth in Authentication settings
3. Create your database tables
4. Copy your project URL and anon key to `.env.local`

## Project Structure

```
src/
  ├── components/     # UI components
  ├── hooks/         # Custom hooks
  ├── lib/           # Utilities and configurations
  ├── pages/         # Route pages
  ├── store/         # Zustand stores
  └── router/        # Route definitions
```

## Features

- 🔒 Authentication with Supabase
- 🛡️ Protected routes
- 🎯 Type-safe API calls
- 🎨 Styled with Tailwind and shadcn/ui
- 📱 Responsive layout
- 🌙 Dark mode support

## License

MIT

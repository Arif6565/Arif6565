# DevFlow Solutions

High-quality, scalable custom software development and technical consulting for startups and SMEs. This monorepo contains the core platform and services.

## Project Structure

```
├── backend/           # API server, business logic, database
│   ├── src/           # TypeScript source files
│   └── tests/         # Backend test suite
├── frontend/          # Web application (TanStack Start / React)
├── shared/            # Shared types, schemas, utilities
│   └── types/         # TypeScript type definitions & contracts
├── scripts/           # Build, deploy, and utility scripts
├── docs/              # Architecture and design documentation
├── CLAUDE.md          # Coding standards and workflow conventions
└── README.md
```

## Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/Arif6565/Arif6565.git
cd Arif6565
# Install backend dependencies
cd backend && bun install
# Install frontend dependencies
cd ../frontend && bun install
```

## Development Workflow

1. Branch from `main` using `feature/<name>` convention
2. Make changes on your feature branch
3. Open a pull request for review
4. Team lead reviews and merges

See [CLAUDE.md](./CLAUDE.md) for full coding standards and conventions.
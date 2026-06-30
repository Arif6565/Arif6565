# DevFlow Solutions — Coding Standards & Workflow

## Branch Naming Conventions

All work **must** be developed on feature branches and merged via pull request.

| Branch pattern      | Purpose                         |
|---------------------|---------------------------------|
| `main`              | Production-ready default branch |
| `feature/<name>`    | New features and enhancements   |
| `fix/<name>`        | Bug fixes                       |
| `chore/<name>`      | Tooling, CI, or infrastructure  |
| `docs/<name>`       | Documentation-only changes      |

Examples: `feature/user-auth`, `fix/login-redirect`, `chore/update-deps`

## Commit Message Style

Use conventional commit format:

```
<type>(<scope>): <description>

[optional body]
```

Types: `feat`, `fix`, `chore`, `docs`, `refactor`, `test`, `style`

Examples:
- `feat(api): add user registration endpoint`
- `fix(db): correct migration rollback order`
- `docs(architecture): update system diagram`

## Pull Request Process

1. Push your feature branch to GitHub
2. Open a pull request against `main`
3. Ensure CI checks pass (lint, test, build)
4. At least one team member reviews before merging
5. Team lead performs the final merge
6. Delete the feature branch after merge

**PR title format**: `type(scope): description` (same as commit messages)

## Coding Standards

### General
- TypeScript strict mode enabled everywhere
- No `any` — use proper types or `unknown` with narrowing
- Prefer `const` over `let`; avoid `var`
- Use ES module syntax (`import`/`export`)
- Always handle promise rejections (no unhandled promises)

### Backend
- Route handlers are async functions
- Input validation on every endpoint (Zod preferred)
- Structured error responses with consistent format
- Database queries use parameterized statements (no raw string interpolation)
- Tests cover success and error paths

### Frontend (TanStack Start / React)
- Functional components with hooks (no class components)
- Server functions for data fetching (TanStack Start pattern)
- Tailwind CSS for styling
- Responsive design (mobile-first)

### Naming
- Files: `kebab-case.ts` (e.g., `user-service.ts`)
- Classes/PascalCase types/interfaces: `UserProfile`
- Functions/variables: `camelCase`
- Constants: `UPPER_SNAKE_CASE`
- Database tables: `snake_case`

## Testing

- Backend: Jest or Vitest with `--coverage` targeting 80%+
- Frontend: Vitest + React Testing Library
- Test files sit next to source: `user-service.ts` → `user-service.test.ts`

## Environment Variables

Required vars (see `.env.example` in each package):

```
DATABASE_URL=
API_PORT=3001
NODE_ENV=development
```

## Code Review Checklist

- [ ] No `any` types introduced
- [ ] Tests cover the change (unit + integration where applicable)
- [ ] No linting errors
- [ ] Error paths are handled
- [ ] Logging added for key operations
- [ ] Database migrations are reversible
- [ ] API changes are backward compatible or versioned
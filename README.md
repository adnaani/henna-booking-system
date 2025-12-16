# Henna Booking System — Backend (NestJS)

Production-safe backend API for a Henna Booking platform. Built with NestJS, TypeORM, PostgreSQL, and Docker, following real-world backend practices.

## Features (MVP scope)
- NestJS modular architecture
- PostgreSQL with TypeORM
- Dockerised local database
- Environment-based configuration
- Health check endpoint
- Production-style build and runtime
- Hot reload for local development
- Ready for AWS (EC2 + RDS)

## Tech stack
- Node.js 20
- NestJS
- TypeORM
- PostgreSQL
- Docker + Docker Compose
- ESLint + Prettier
- Jest

## Project structure
```
src/
├─ config/          # env & database config
├─ entities/        # TypeORM entities
├─ modules/         # feature modules
│  └─ health/       # /health endpoint
├─ app.module.ts
└─ main.ts          # NestJS entrypoint
```

## Environment variables
Create a `.env` file in the repo root:
```
PORT=3000
DB_HOST=127.0.0.1
DB_PORT=5432
DB_USER=henna
DB_PASSWORD=henna
DB_NAME=henna_booking
```
A safe template is provided in `.env.example`.

## Running the app
1) Install dependencies
```
npm install
```

2) Start Postgres (Docker)
```
docker-compose up -d db
```

3) Local development (hot reload)
```
npm run start:dev
```

4) Production-style build and run
```
npm run build
npm run start:prod
```

## Docker notes
- `docker-compose.yaml` provides Postgres; the API runs on your host (Node 20).
- The app reads DB connection details from `.env` (host defaults to `127.0.0.1`).
- Containers run compiled code (`dist/main.js`) when using `npm run start:prod`.

## Health check
- Endpoint: `GET /health`
- Response:
```
{ "status": "ok" }
```

## Testing
```
npm run test
npm run test:watch
npm run test:cov
```

## Linting and formatting
```
npm run lint
npm run format
```

## Secrets and security
- `.env` is git-ignored; no credentials are committed.
- Docker Compose uses env interpolation; suitable for AWS SSM / EC2 env vars.

## Roadmap
- Admin authentication
- Booking and availability logic
- Stripe payments
- Email notifications (SES)
- RDS integration
- CI/CD

## Author
Built as a production-grade MVP with real backend architecture and deployment practices.

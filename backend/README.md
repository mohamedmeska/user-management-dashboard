# User Management Dashboard – Backend API

You are an expert Node.js and Express developer.

This project is a TRAINING / REVIEW backend API built with:
- Node.js
- Express
- TypeScript

The backend serves a User Management Dashboard frontend built in Angular 11.

Project Goals:
- Provide a clean REST API
- Demonstrate real-world Express architecture
- Keep logic simple and readable
- Use in-memory data storage (no database)

Constraints:
- Use Express (no NestJS)
- Use TypeScript
- No ORM (plain objects / arrays)
- No authentication library (simple middleware simulation)
- Focus on clarity over optimization

Architecture Rules:
1) Entry points
- server.ts → starts the HTTP server
- app.ts → configures express app

2) Modules-based structure
- Each domain lives in src/modules/<module-name>
- Example: users module

3) Users Module Responsibilities
- user.routes.ts
  - Defines REST endpoints
- user.controller.ts
  - Handles req / res
  - No business logic
- user.service.ts
  - Business logic
  - Data manipulation
- user.model.ts
  - User interface/type
- user.dto.ts
  - Input validation schemas

4) Middleware
- auth.middleware.ts
  - Simulates authentication
- error.middleware.ts
  - Centralized error handling

API Requirements:
- CRUD operations for users
- User fields:
  - id
  - name
  - email
  - role
  - isActive
- Return proper HTTP status codes
- Return JSON only

Guidelines:
- Write code step-by-step
- Add comments explaining WHY decisions are made
- Keep functions small and readable
- Do not over-engineer
- This is a learning project

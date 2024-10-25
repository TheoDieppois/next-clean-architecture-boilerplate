# Clean Architecture Next.js Project

This project is a Next.js application implementing Clean Architecture principles. It demonstrates the separation of concerns and dependency inversion, making the codebase more maintainable and scalable.

## Clean Architecture Overview

Clean Architecture is a software design philosophy that separates the elements of a design into ring levels. The main rule of Clean Architecture is that code dependencies can only move from the outer levels inward. This means that:

1. Entities (Core Business Rules)
2. Use Cases (Application Business Rules)
3. Interface Adapters (Controllers, Presenters, Gateways)
4. Frameworks and Drivers (Web, UI, Database, External Interfaces)

This project structure reflects these principles, with core business logic isolated from external concerns.

## Installation

To get started with this project, follow these steps:

1. Clone the repository:

   ```
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install the dependencies:
   ```
   npm install
   ```

## Running the Project

To run the project in development mode:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Project Structure

- `/app`: Next.js app router and pages
- `/core`: Core business logic
  - `/domain`: Entities and business rules
  - `/infrastructure`: External implementations (repositories, services)
  - `/presentation`: Controllers and DTOs
- `/di`: Dependency injection configuration

## Key Features

- Implements Clean Architecture principles
- Uses Inversify for dependency injection
- Incorporates Zod for runtime type checking and validation
- Utilizes Next.js 14 with app router for server-side rendering and API routes

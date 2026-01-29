Project Standards & Guidelines
This document outlines our code standards, folder structure, Git workflow, onboarding steps, state management, API integration, and known issues. Following these ensures consistency, scalability, and easier onboarding for future developers.

1.	Code Standards

Naming Conventions
●	kebab-case – for all folders/files.
●	PascalCase – for components, classes, and types.
●	snake_case – for database tables and columns.
●	camelCase – for functions, variables, zod schemas, hooks, etc.

2.	Folder Structure
●	src – main source code (also contains routing setup).

Router (React Router)
●	src/App.tsx – root app with <BrowserRouter> and routes.
●	src/routes – route-based pages.
○	src/routes/<route-name>/index.tsx – route page component.
○	src/routes/<route-name>/_components – page-specific components.
○	src/routes/<route-name>/_actions – page-specific actions.

Features (Feature-Based Approach)
●	src/features – feature modules. (Only if needed)
○	src/features/<feature-name> – feature module folder.
■	components – components for this feature.
■	constants – constants used in this feature.
■	api – data access layer (API calls).
 
■	hooks – custom hooks, React Query, Zustand stores.
■	services – business logic and orchestration of data.
■	types – TypeScript types.
■	utils – helper utilities.

Feature-Based Approach (Explanation):
We group files by feature/module instead of type. This makes it easier to maintain, scale, and onboard new developers since all related code (UI, hooks, API, services) lives together inside one folder.

Shared / Global
●	src/assets – static assets.
●	src/components – shared components.
○	src/components/ui/* – UI building blocks (button, input, etc.).
●	src/constants – global constants.
●	src/api – global API and database access.
●	src/hooks – shared hooks.
○	src/hooks/use-<hook-name>.ts – custom hook.
○	src/hooks/query/use-<hook-name>-query.ts – React Query query.
○	src/hooks/query/use-<hook-name>-mutation.ts – React Query mutation.
○	src/hooks/stores/use-<hook-name>-store.ts – Zustand store.
●	src/lib – third-party integrations or libraries.
●	src/services – global business logic and orchestration.
●	src/types – shared types.
●	src/utils – shared utilities.
 
3.	Git Standards

Branch Naming
We follow a task type + task/module name format:
●	feature/<task-name> – new feature development.
○	Example: feature/app-shell, feature/section-management
●	fix/<task-name> – bug fixes.
○	Example: fix/section-deletion, fix/navbar-overlap
●	chore/<task-name> – maintenance tasks (config, build, CI/CD, etc.).
○	Example: chore/eslint-config, chore/update-deps
●	refactor/<module-name>	–	restructuring	existing	code	without	changing functionality.
○	Example: refactor/app-shell, refactor/section-management
●	docs/<task-name> – documentation updates.
○	Example: docs/readme-update, docs/code-standards

Commit Message Format
We follow a type: concise_task_details format.
Types
●	feature – new feature.
●	fix – bug fix.
●	chore – maintenance tasks (e.g., config, build).
●	refactor – restructuring code without changing functionality.
●	docs – documentation updates.
Examples
●	feature: created section management
●	fix: resolved section deletion bug
●	chore: updated ESLint config\
●	refactor: optimized section rendering
●	docs: updated README with setup instructions
Note: Keep commit details concise and specific for better code reviews.
 
4.	Architecture Notes

●	UI Layer: Built with React, TypeScript, TailwindCSS.
●	State Management:
○	Zustand is used for client-side and UI state.
■	Each feature has its own store inside the src/features/<feature-name>/store folder.
■	Shared/global stores live inside the src/store folder.
■	Some stores are persisted using zustand/middleware.
○	React Query is used for server state (API calls, caching, refetching).
●	Data Layer (API): Axios instance for all API requests, integrated with React Query.
●	Feature-Based Structure: All related code (UI, hooks, queries, mutations, services, stores) is grouped under the feature directory.
 
5.	State Management

We use Zustand for lightweight client-side state management.

Folder Structure

●	Feature-specific stores: src/features/<feature-name>/store
●	Shared/global stores: src/store

Example: Applicant Information Store

 
 


Usage:

 
6.	API Integration

We use Axios (configured instance) + React Query (@tanstack/react-query) for API integration.

Folder Structure
●	src/features/<feature-name>/api/
○	query/ - React Query hooks for fetching
○	mutation/ - React Query hooks for mutations
●	src/api/
○	axios-instance.ts - shared axios instance
○	logout.ts - shared logout handler


Example: Application Query

 
 


Usage:

 
 
 
7.	Quick Start (Onboarding)

Prerequisites
●	Node.js – version 18+ recommended.
●	Package Manager – npm or yarn (project is configured for npm by default).
●	Git – for version control.

Setup Steps
1.	Clone the repository:

2.	Install dependencies:


Environment variables:
●	Copy .env.example → .env.
●	Update values as needed (API URLs, secrets, etc.).

Run development server:



Build for production:

 
Preview production build (optional):

 
8.	Known Issues
●	API integration is not yet fully implemented in some modules.
●	Some data is still mocked for testing UI.
●	Error handling may need improvement in certain API calls.

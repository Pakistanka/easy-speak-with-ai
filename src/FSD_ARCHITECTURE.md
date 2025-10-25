# Feature-Sliced Design (FSD) Architecture

This project follows the Feature-Sliced Design methodology for organizing code.

## Layers Structure

```
src/
├── app/              # App initialization (Next.js app directory)
├── pages/            # Page compositions 
├── widgets/          # UI widgets (complex UI blocks)
├── features/         # Business features
├── entities/         # Business entities
├── services/         # API services and backend requests
└── shared/           # Shared resources
    ├── ui/           # Reusable UI components
    ├── lib/          # Utility functions and hooks
    ├── api/          # API utilities (HTTP client, interceptors)
    ├── config/       # Configuration files
    ├── types/        # TypeScript types
    └── styles/       # Global styles
```

## Import Rules

FSD enforces strict import rules between layers:

- **app** can import from: pages, widgets, features, entities, shared
- **pages** can import from: widgets, features, entities, shared
- **widgets** can import from: features, entities, shared
- **features** can import from: entities, shared
- **entities** can import from: shared
- **shared** cannot import from any other layer

## Layer Descriptions

### App Layer
Contains application initialization logic, providers, and routing configuration.

### Pages Layer
Contains page-level components that compose widgets and features.

### Widgets Layer
Contains complex UI blocks that combine multiple features or entities.

### Features Layer
Contains business features - user-centric functionality like authentication, search, etc.

### Entities Layer
Contains business entities - core data models and their related logic.

### Services Layer
Contains API services and backend request logic:
- **postService.ts**: Post-related API calls
- **userService.ts**: User-related API calls  
- **authService.ts**: Authentication API calls

### Shared Layer
Contains reusable code that doesn't belong to any specific business logic:
- **ui/**: Basic UI components (buttons, inputs, modals)
- **lib/**: Utility functions, hooks, helpers
- **api/**: HTTP client utilities, interceptors, base configurations
- **config/**: App configuration, constants
- **types/**: Common TypeScript types
- **styles/**: Global CSS, design tokens

## Example Usage

```typescript
// ✅ Good: Feature importing from entities and shared
import { UserEntity } from 'entities/user';
import { Button } from 'shared/ui';

// ❌ Bad: Shared importing from feature
import { AuthFeature } from 'features/auth'; // in shared layer

// ✅ Good: Widget importing from features
import { SearchFeature } from 'features/search';
import { UserProfile } from 'entities/user';
```

## Migration Notes

Existing code has been reorganized according to FSD principles:
- Components moved to `shared/ui`
- Hooks moved to `shared/lib/hooks`
- Services moved to `shared/api`
- Types moved to `shared/types`
- Config moved to `shared/config`
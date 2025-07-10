# Component Generation Quality Context

## **React Component Standards**

### **Naming Conventions**

- **Components**: `PascalCase` (e.g., `MyComponent`)
- **Props Interface**: `IComponentNameProps` (e.g., `IMyComponentProps`)
- **Files**: `kebab-case.tsx` (e.g., `my-component.tsx`)

### **Import Organization**

```typescript
// Built-in modules
import React from 'react';
import { useState, useEffect } from 'react';

// External libraries
import { motion } from 'framer-motion';
import { Button } from '@headlessui/react';

// Internal modules
import { AnimationObserver } from '@/components/AnimationObserver';
import { formatDate } from '@/utils/date';
```

### **TypeScript Standards**

- **Strict Mode**: Always enabled
- **No `any`**: Use proper types or `unknown`
- **Explicit Props**: Define interface for all props
- **Return Types**: Explicit function return types

### **Component Structure**

```typescript
interface IMyComponentProps {
  title: string;
  description?: string;
  onAction: () => void;
}

export const MyComponent: React.FC<IMyComponentProps> = ({
  title,
  description,
  onAction,
}) => {
  // Component logic here
  return (
    <div>
      {/* JSX content */}
    </div>
  );
};
```

### **Complexity Limits**

- **Function Length**: ≤ 40 lines
- **Parameters**: ≤ 4 parameters
- **Nesting**: ≤ 2 levels deep
- **Component Size**: ≤ 150 lines (split if larger)

### **Performance Patterns**

- **Memoization**: Use `React.memo` for expensive components
- **Event Handlers**: Use `useCallback` for handlers passed as props
- **State Updates**: Use functional updates for state based on previous state
- **Cleanup**: Always cleanup effects and subscriptions

### **Accessibility Requirements**

- **Semantic HTML**: Use proper HTML elements
- **ARIA Attributes**: Add roles and labels for interactive elements
- **Keyboard Navigation**: Ensure full keyboard accessibility
- **Focus Management**: Proper focus states and management

### **Design System Compliance**

- **Color Palette**: Use `#F9FAFB` (light) and `#101825` (dark)
- **Typography**: System font stack with consistent scaling
- **Spacing**: 4/8/16/24/32px increments
- **Responsive**: Mobile-first approach

### **Testing Requirements**

- **Test File**: `ComponentName.test.tsx` in `tests/components/`
- **Coverage**: 100% for new components
- **Test Types**: Unit, integration, accessibility tests
- **Mocking**: Proper mocking of dependencies

---

**@quality:component - Use these standards for all React component generation**

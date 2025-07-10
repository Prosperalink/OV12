# Test Generation Quality Context

## **Test-First Development Standards**

### **Test-First Workflow**

- **Write Tests First**: Create tests before or with code
- **Synchronized Development**: Tests and code evolve together
- **Coverage Tracking**: Maintain 100% coverage for new code
- **Continuous Testing**: Run tests on every change

### **Test File Structure**

```typescript
// ComponentName.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { MyComponent } from '@/components/MyComponent';

describe('MyComponent', () => {
  const defaultProps = {
    title: 'Test Title',
    onAction: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with required props', () => {
    render(<MyComponent {...defaultProps} />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('calls onAction when button is clicked', () => {
    render(<MyComponent {...defaultProps} />);
    fireEvent.click(screen.getByRole('button'));
    expect(defaultProps.onAction).toHaveBeenCalledTimes(1);
  });
});
```

### **Testing Framework Standards**

- **Primary**: Jest + React Testing Library
- **Coverage**: 90%+ overall, 100% for new code
- **File Location**: `tests/components/ComponentName.test.tsx`
- **Naming**: `ComponentName.test.tsx` or `ComponentName.spec.tsx`

### **Test Categories**

#### **Unit Tests**

- **Component Rendering**: Verify correct rendering
- **Props Handling**: Test prop validation and usage
- **State Management**: Test state changes and updates
- **Event Handling**: Test user interactions and callbacks

#### **Integration Tests**

- **Component Integration**: Test component interactions
- **API Integration**: Test data fetching and error handling
- **Form Integration**: Test form submission and validation
- **Navigation Integration**: Test routing and navigation

#### **Accessibility Tests**

- **ARIA Attributes**: Verify proper ARIA implementation
- **Keyboard Navigation**: Test keyboard accessibility
- **Screen Reader**: Test with screen reader compatibility
- **Color Contrast**: Verify accessibility color standards

#### **Performance Tests**

- **Render Performance**: Test component render times
- **Memory Leaks**: Test for memory leaks in effects
- **Bundle Impact**: Test component bundle size
- **Lighthouse**: Test performance metrics

### **Test Patterns**

#### **Component Testing Pattern**

```typescript
describe('ComponentName', () => {
  // Setup
  const defaultProps = {
    /* props */
  };

  // Happy path tests
  it('renders correctly', () => {});
  it('handles user interactions', () => {});

  // Edge cases
  it('handles empty data', () => {});
  it('handles error states', () => {});

  // Accessibility
  it('is keyboard accessible', () => {});
  it('has proper ARIA attributes', () => {});
});
```

#### **Hook Testing Pattern**

```typescript
import { renderHook, act } from '@testing-library/react';
import { useMyHook } from '@/hooks/useMyHook';

describe('useMyHook', () => {
  it('returns initial state', () => {
    const { result } = renderHook(() => useMyHook());
    expect(result.current.value).toBe(initialValue);
  });

  it('updates state correctly', () => {
    const { result } = renderHook(() => useMyHook());

    act(() => {
      result.current.updateValue(newValue);
    });

    expect(result.current.value).toBe(newValue);
  });
});
```

### **Mocking Standards**

- **External Dependencies**: Mock API calls and external services
- **Browser APIs**: Mock localStorage, sessionStorage, etc.
- **Timers**: Mock setTimeout, setInterval for testing
- **Modules**: Mock heavy dependencies for performance

### **Test Data Management**

- **Fixtures**: Create reusable test data
- **Factories**: Use factory functions for test data
- **Cleanup**: Always cleanup test data after tests
- **Isolation**: Each test should be independent

### **Assertion Standards**

- **Specific Assertions**: Use specific matchers over generic ones
- **User-Centric**: Test from user perspective
- **Accessibility**: Include accessibility assertions
- **Performance**: Include performance assertions where relevant

### **Coverage Requirements**

- **Statements**: 100% for new code
- **Branches**: 100% for new code
- **Functions**: 100% for new code
- **Lines**: 100% for new code

### **Test Performance**

- **Fast Execution**: Tests should run quickly
- **Parallel Execution**: Tests should run in parallel
- **Minimal Setup**: Keep test setup minimal
- **Efficient Cleanup**: Clean up efficiently

---

**@quality:test - Use these standards for all test generation and test-first development**

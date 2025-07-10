# React Hooks Guidelines

## Rules of Hooks

React Hooks must follow specific rules to work correctly. Violating these rules can cause bugs and errors.

### ✅ Correct Hook Usage

```typescript
// ✅ CORRECT: Hooks called at the top level
function MyComponent() {
  const [state, setState] = useState(false);
  const { theme } = useTheme(); // Hook called before any conditionals

  useEffect(() => {
    // Effect logic
  }, []);

  if (!state) return null; // Conditional return AFTER hooks

  return <div>Content</div>;
}
```

### ❌ Incorrect Hook Usage

```typescript
// ❌ WRONG: Hook called after conditional return
function MyComponent() {
  const [state, setState] = useState(false);

  if (!state) return null; // Conditional return BEFORE hooks

  const { theme } = useTheme(); // Hook called after conditional - VIOLATION!

  return <div>Content</div>;
}
```

## Common Violations and Fixes

### 1. Conditional Hook Calls

**Problem**: Calling hooks inside conditions, loops, or nested functions.

**Solution**: Always call hooks at the top level of your component.

```typescript
// ❌ WRONG
function Component() {
  const [mounted, setMounted] = useState(false);

  if (!mounted) return null;

  const { theme } = useTheme(); // Violation!

  return <div>Content</div>;
}

// ✅ CORRECT
function Component() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme(); // Hook called first

  if (!mounted) return null;

  return <div>Content</div>;
}
```

### 2. Early Returns with Hooks

**Problem**: Returning early before calling all hooks.

**Solution**: Call all hooks before any conditional returns.

```typescript
// ❌ WRONG
function Component() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // Early return

  const { theme } = useTheme(); // Hook called after return - VIOLATION!

  return <div>Content</div>;
}

// ✅ CORRECT
function Component() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme(); // All hooks called first

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // Conditional return after hooks

  return <div>Content</div>;
}
```

### 3. Dynamic Hook Calls

**Problem**: Calling hooks conditionally based on props or state.

**Solution**: Use conditional logic inside the hook or component body.

```typescript
// ❌ WRONG
function Component({ shouldUseTheme }) {
  const [state, setState] = useState(false);

  if (shouldUseTheme) {
    const { theme } = useTheme(); // Conditional hook call
  }

  return <div>Content</div>;
}

// ✅ CORRECT
function Component({ shouldUseTheme }) {
  const [state, setState] = useState(false);
  const themeContext = shouldUseTheme ? useTheme() : null; // Always called

  return <div>Content</div>;
}
```

## Best Practices

### 1. Hook Order Consistency

Always call hooks in the same order on every render:

```typescript
function Component() {
  // 1. State hooks first
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState('');

  // 2. Effect hooks
  useEffect(() => {}, []);
  useEffect(() => {}, [state1]);

  // 3. Context hooks
  const { theme } = useTheme();
  const { user } = useUser();

  // 4. Custom hooks
  const { data } = useCustomHook();

  // 5. Conditional logic
  if (!state1) return null;

  return <div>Content</div>;
}
```

### 2. Custom Hook Guidelines

When creating custom hooks:

```typescript
// ✅ Good custom hook
function useCustomHook() {
  const [state, setState] = useState(false);

  useEffect(() => {
    // Effect logic
  }, []);

  return { state, setState };
}

// ❌ Bad custom hook (calling hooks conditionally)
function useCustomHook(condition) {
  if (condition) {
    const [state, setState] = useState(false); // Conditional hook call
    return { state, setState };
  }
  return { state: null, setState: () => {} };
}
```

### 3. Error Handling

Always handle potential errors in custom hooks:

```typescript
function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}
```

## Debugging Hook Issues

### Common Error Messages

1. **"React has detected a change in the order of Hooks"**
   - **Cause**: Hooks called in different order between renders
   - **Fix**: Ensure hooks are always called in the same order

2. **"Hooks can only be called inside the body of a function component"**
   - **Cause**: Hook called outside React component
   - **Fix**: Move hook call inside component function

3. **"Invalid hook call"**
   - **Cause**: Hook called conditionally or in wrong context
   - **Fix**: Call hooks at the top level of component

### Debugging Tools

1. **ESLint Plugin**: Use `eslint-plugin-react-hooks`
2. **React DevTools**: Check hook order in component tree
3. **Console Errors**: React provides detailed error messages

## Recent Fixes Applied

### ThemeToggle Component Fix

**Issue**: `useTheme()` hook was called after conditional return.

**Before**:

```typescript
function ThemeToggle() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null; // Early return

  const { theme, toggleTheme } = useTheme(); // ❌ Hook after return
}
```

**After**:

```typescript
function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme(); // ✅ Hook called first

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // Conditional return after hooks
}
```

## Prevention Strategies

1. **Code Review**: Always check hook order in reviews
2. **ESLint Rules**: Use `react-hooks/rules-of-hooks` rule
3. **Testing**: Test components with different prop combinations
4. **Documentation**: Document hook dependencies and order

---

_Last Updated: December 2024_
_Version: 1.0_
_Status: Active_

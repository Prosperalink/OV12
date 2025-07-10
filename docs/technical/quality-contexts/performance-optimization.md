# Performance Optimization Quality Context

## **Performance-First Development Standards**

### **Core Performance Principles**

- **Lighthouse Targets**: <1.5s desktop, <2.5s mobile load times
- **Bundle Optimization**: <250KB critical path
- **Render Performance**: <16ms frame budget
- **Memory Management**: Prevent memory leaks and excessive usage

### **Lighthouse Performance Targets**

#### **Core Web Vitals**

- **Largest Contentful Paint (LCP)**: <2.5s
- **First Input Delay (FID)**: <100ms
- **Cumulative Layout Shift (CLS)**: <0.1

#### **Performance Metrics**

- **First Contentful Paint (FCP)**: <1.8s
- **Speed Index**: <3.4s
- **Time to Interactive (TTI)**: <3.8s
- **Total Blocking Time (TBT)**: <200ms

### **Bundle Optimization**

#### **Code Splitting Strategy**

```typescript
// ✅ Dynamic imports for code splitting
const LazyComponent = lazy(() => import('./LazyComponent'));

// ✅ Route-based code splitting
const HomePage = lazy(() => import('@/pages/HomePage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));

// ✅ Component-based code splitting
const HeavyChart = lazy(() => import('@/components/HeavyChart'));
```

#### **Tree Shaking Optimization**

```typescript
// ✅ Specific imports for tree shaking
import { Button } from '@headlessui/react';
import { motion } from 'framer-motion';

// ❌ Avoid importing entire libraries
// import * as React from 'react';
```

#### **Bundle Analysis**

```typescript
// ✅ Bundle size monitoring
const bundleConfig = {
  maxSize: 250, // KB
  maxInitialSize: 150, // KB
  maxAsyncSize: 50, // KB
};
```

### **React Performance Patterns**

#### **Memoization Strategy**

```typescript
// ✅ React.memo for expensive components
const ExpensiveComponent = React.memo(({ data }: IProps) => {
  return <div>{/* Expensive rendering */}</div>;
});

// ✅ useMemo for expensive calculations
const expensiveValue = useMemo(() => {
  return heavyCalculation(data);
}, [data]);

// ✅ useCallback for event handlers
const handleClick = useCallback(() => {
  // Handle click
}, [dependencies]);
```

#### **State Management Optimization**

```typescript
// ✅ Functional state updates
const [count, setCount] = useState(0);

// ✅ Use functional updates for state based on previous state
setCount(prevCount => prevCount + 1);

// ✅ Avoid unnecessary re-renders
const [user, setUser] = useState<IUser | null>(null);
const userContext = useMemo(() => ({ user, setUser }), [user]);
```

#### **Effect Optimization**

```typescript
// ✅ Proper effect dependencies
useEffect(() => {
  const subscription = api.subscribe(data);
  return () => subscription.unsubscribe();
}, [api]); // Only re-run if api changes

// ✅ Cleanup effects properly
useEffect(() => {
  const timer = setTimeout(() => {
    // Do something
  }, 1000);

  return () => clearTimeout(timer);
}, []);
```

### **Image Optimization**

#### **Next.js Image Component**

```typescript
// ✅ Optimized image loading
import Image from 'next/image';

const OptimizedImage = () => (
  <Image
    src="/hero-image.jpg"
    alt="Hero image"
    width={1200}
    height={600}
    priority={true} // For above-the-fold images
    placeholder="blur"
    blurDataURL="data:image/jpeg;base64,..."
  />
);
```

#### **Lazy Loading Strategy**

```typescript
// ✅ Intersection Observer for lazy loading
const LazyImage = ({ src, alt }: IImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={imgRef}
      src={isInView ? src : ''}
      alt={alt}
      onLoad={() => setIsLoaded(true)}
      className={isLoaded ? 'loaded' : 'loading'}
    />
  );
};
```

### **CSS Performance Optimization**

#### **CSS-in-JS Optimization**

```typescript
// ✅ Optimized styled-components
const StyledButton = styled.button`
  background: ${props => props.theme.colors.primary};
  padding: 8px 16px;
  border-radius: 4px;
  transition: background-color 0.2s ease;

  &:hover {
    background: ${props => props.theme.colors.primaryDark};
  }
`;

// ✅ Avoid inline styles for performance
const Component = () => (
  <div className="optimized-styles">
    {/* Content */}
  </div>
);
```

#### **Critical CSS Strategy**

```typescript
// ✅ Extract critical CSS
const criticalStyles = `
  .hero-section {
    background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

// ✅ Inline critical CSS
const CriticalCSS = () => (
  <style dangerouslySetInnerHTML={{ __html: criticalStyles }} />
);
```

### **API Performance**

#### **Request Optimization**

```typescript
// ✅ Request caching
const useCachedRequest = <T>(url: string, options?: RequestInit) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cacheKey = `cache_${url}`;
    const cached = sessionStorage.getItem(cacheKey);

    if (cached) {
      setData(JSON.parse(cached));
      setLoading(false);
      return;
    }

    fetch(url, options)
      .then(res => res.json())
      .then(data => {
        sessionStorage.setItem(cacheKey, JSON.stringify(data));
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
};
```

#### **Debouncing Expensive Operations**

```typescript
// ✅ Debounced search
const useDebouncedSearch = (
  callback: (query: string) => void,
  delay: number
) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      callback(searchTerm);
    }, delay);

    return () => clearTimeout(handler);
  }, [searchTerm, callback, delay]);

  return { searchTerm, setSearchTerm };
};
```

### **Memory Management**

#### **Memory Leak Prevention**

```typescript
// ✅ Cleanup subscriptions
useEffect(() => {
  const subscription = eventBus.subscribe('event', handler);
  return () => subscription.unsubscribe();
}, []);

// ✅ Cleanup timers
useEffect(() => {
  const timer = setInterval(() => {
    // Periodic task
  }, 1000);

  return () => clearInterval(timer);
}, []);
```

#### **Object Pooling**

```typescript
// ✅ Object pooling for expensive objects
class ObjectPool<T> {
  private pool: T[] = [];
  private createFn: () => T;

  constructor(createFn: () => T) {
    this.createFn = createFn;
  }

  get(): T {
    return this.pool.pop() || this.createFn();
  }

  release(obj: T): void {
    this.pool.push(obj);
  }
}
```

### **Performance Monitoring**

#### **Performance Metrics**

```typescript
// ✅ Performance monitoring
const usePerformanceMonitor = () => {
  useEffect(() => {
    const observer = new PerformanceObserver(list => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          console.log(
            'Page Load Time:',
            navEntry.loadEventEnd - navEntry.loadEventStart
          );
        }
      }
    });

    observer.observe({ entryTypes: ['navigation', 'measure'] });

    return () => observer.disconnect();
  }, []);
};
```

### **Performance Testing**

#### **Performance Test Patterns**

```typescript
// ✅ Performance testing
describe('Performance Tests', () => {
  it('should render within performance budget', () => {
    const startTime = performance.now();
    render(<HeavyComponent />);
    const endTime = performance.now();

    expect(endTime - startTime).toBeLessThan(16); // 16ms budget
  });

  it('should not cause memory leaks', () => {
    const initialMemory = performance.memory?.usedJSHeapSize || 0;

    for (let i = 0; i < 100; i++) {
      const { unmount } = render(<Component />);
      unmount();
    }

    const finalMemory = performance.memory?.usedJSHeapSize || 0;
    const memoryIncrease = finalMemory - initialMemory;

    expect(memoryIncrease).toBeLessThan(1024 * 1024); // 1MB limit
  });
});
```

---

**@quality:performance - Use these standards for all performance optimization and monitoring**

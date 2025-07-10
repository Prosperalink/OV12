# Accessibility Patterns Quality Context

## **WCAG 2.1 AA Compliance Standards**

### **Core Accessibility Principles**

- **Perceivable**: Information must be presentable to users in ways they can perceive
- **Operable**: User interface components and navigation must be operable
- **Understandable**: Information and operation of user interface must be understandable
- **Robust**: Content must be robust enough to be interpreted by assistive technologies

### **Semantic HTML Structure**

#### **Document Structure**

```html
<!-- ✅ Proper document structure -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <header>
      <nav role="navigation" aria-label="Main navigation">
        <!-- Navigation content -->
      </nav>
    </header>

    <main role="main">
      <h1>Page Heading</h1>
      <section aria-labelledby="section-heading">
        <h2 id="section-heading">Section Heading</h2>
        <!-- Section content -->
      </section>
    </main>

    <footer role="contentinfo">
      <!-- Footer content -->
    </footer>
  </body>
</html>
```

#### **Heading Hierarchy**

```typescript
// ✅ Proper heading hierarchy
const PageStructure = () => (
  <div>
    <h1>Main Page Title</h1>
    <section>
      <h2>Section Title</h2>
      <article>
        <h3>Article Title</h3>
        <p>Article content</p>
      </article>
    </section>
  </div>
);
```

### **ARIA Implementation**

#### **Landmark Roles**

```typescript
// ✅ Proper landmark roles
const Layout = () => (
  <div>
    <header role="banner">
      <nav role="navigation" aria-label="Main navigation">
        {/* Navigation content */}
      </nav>
    </header>

    <main role="main">
      {/* Main content */}
    </main>

    <aside role="complementary" aria-labelledby="sidebar-heading">
      <h2 id="sidebar-heading">Sidebar</h2>
      {/* Sidebar content */}
    </aside>

    <footer role="contentinfo">
      {/* Footer content */}
    </footer>
  </div>
);
```

#### **Interactive Elements**

```typescript
// ✅ Accessible interactive elements
const AccessibleButton = ({ onClick, children, ...props }: IButtonProps) => (
  <button
    onClick={onClick}
    aria-label={props['aria-label']}
    aria-describedby={props['aria-describedby']}
    {...props}
  >
    {children}
  </button>
);

const AccessibleLink = ({ href, children, ...props }: ILinkProps) => (
  <a
    href={href}
    aria-label={props['aria-label']}
    aria-describedby={props['aria-describedby']}
    {...props}
  >
    {children}
  </a>
);
```

#### **Form Accessibility**

```typescript
// ✅ Accessible form elements
const AccessibleForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-describedby={error ? 'email-error' : undefined}
          aria-invalid={!!error}
          required
        />
        {error && (
          <div id="email-error" role="alert" aria-live="polite">
            {error}
          </div>
        )}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};
```

### **Keyboard Navigation**

#### **Focus Management**

```typescript
// ✅ Proper focus management
const Modal = ({ isOpen, onClose, children }: IModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      previousFocus.current = document.activeElement as HTMLElement;
      modalRef.current?.focus();
    } else {
      previousFocus.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      tabIndex={-1}
      ref={modalRef}
    >
      <h2 id="modal-title">Modal Title</h2>
      {children}
    </div>
  );
};
```

#### **Skip Links**

```typescript
// ✅ Skip navigation links
const SkipLinks = () => (
  <div className="skip-links">
    <a href="#main-content" className="skip-link">
      Skip to main content
    </a>
    <a href="#navigation" className="skip-link">
      Skip to navigation
    </a>
  </div>
);
```

### **Color and Contrast**

#### **Color Contrast Compliance**

```typescript
// ✅ WCAG AA color contrast (4.5:1 for normal text, 3:1 for large text)
const colorPalette = {
  primary: '#1a73e8', // Meets contrast requirements
  secondary: '#5f6368', // Meets contrast requirements
  error: '#d93025', // Meets contrast requirements
  success: '#137333', // Meets contrast requirements
  background: '#ffffff',
  surface: '#f8f9fa',
  text: {
    primary: '#202124', // 15.6:1 contrast ratio
    secondary: '#5f6368', // 7.1:1 contrast ratio
    disabled: '#9aa0a6', // 2.8:1 contrast ratio (not accessible)
  },
};
```

#### **Color Independence**

```typescript
// ✅ Don't rely solely on color
const StatusIndicator = ({ status }: { status: 'success' | 'error' | 'warning' }) => (
  <div className={`status-indicator status-${status}`}>
    <span className="status-icon" aria-hidden="true">
      {status === 'success' && '✓'}
      {status === 'error' && '✗'}
      {status === 'warning' && '⚠'}
    </span>
    <span className="sr-only">
      Status: {status}
    </span>
  </div>
);
```

### **Screen Reader Support**

#### **Screen Reader Only Content**

```css
/* ✅ Screen reader only class */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

```typescript
// ✅ Screen reader only component
const ScreenReaderOnly = ({ children }: { children: React.ReactNode }) => (
  <span className="sr-only">{children}</span>
);
```

#### **Live Regions**

```typescript
// ✅ Live regions for dynamic content
const LiveRegion = ({ message }: { message: string }) => (
  <div
    role="status"
    aria-live="polite"
    aria-atomic="true"
    className="live-region"
  >
    {message}
  </div>
);
```

### **Image Accessibility**

#### **Alt Text Standards**

```typescript
// ✅ Proper alt text implementation
const AccessibleImage = ({ src, alt, ...props }: IImageProps) => {
  // Decorative images
  if (props['aria-hidden'] === 'true') {
    return <img src={src} alt="" {...props} />;
  }

  // Informative images
  return <img src={src} alt={alt} {...props} />;
};

// ✅ Complex images with descriptions
const ComplexImage = ({ src, alt, description }: IComplexImageProps) => (
  <figure>
    <img src={src} alt={alt} />
    <figcaption>{description}</figcaption>
  </figure>
);
```

### **Form Validation Accessibility**

#### **Error Announcements**

```typescript
// ✅ Accessible form validation
const AccessibleFormValidation = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          aria-describedby={errors.email ? 'email-error' : undefined}
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <div id="email-error" role="alert" aria-live="polite">
            {errors.email}
          </div>
        )}
      </div>
    </form>
  );
};
```

### **Interactive Component Accessibility**

#### **Custom Controls**

```typescript
// ✅ Accessible custom controls
const AccessibleToggle = ({ checked, onChange, label }: IToggleProps) => (
  <div>
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      aria-label={label}
    >
      <span className="toggle-track">
        <span className={`toggle-thumb ${checked ? 'checked' : ''}`} />
      </span>
    </button>
    <span className="toggle-label">{label}</span>
  </div>
);
```

#### **Data Tables**

```typescript
// ✅ Accessible data tables
const AccessibleTable = ({ data, columns }: ITableProps) => (
  <table>
    <caption>Data Table</caption>
    <thead>
      <tr>
        {columns.map(column => (
          <th key={column.key} scope="col">
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, index) => (
        <tr key={index}>
          {columns.map(column => (
            <td key={column.key}>{row[column.key]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);
```

### **Testing Accessibility**

#### **Accessibility Testing**

```typescript
// ✅ Accessibility testing
describe('Accessibility Tests', () => {
  it('should have proper heading hierarchy', () => {
    render(<PageComponent />);
    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(3);
    expect(headings[0]).toHaveAttribute('aria-level', '1');
  });

  it('should be keyboard navigable', () => {
    render(<NavigationComponent />);
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();

    // Test tab navigation
    user.tab();
    expect(screen.getByRole('link')).toHaveFocus();
  });

  it('should have proper ARIA attributes', () => {
    render(<FormComponent />);
    const input = screen.getByLabelText('Email');
    expect(input).toHaveAttribute('aria-describedby');
    expect(input).toHaveAttribute('aria-invalid');
  });
});
```

### **Accessibility Checklist**

#### **Perceivable**

- [ ] Text alternatives for non-text content
- [ ] Captions and other alternatives for multimedia
- [ ] Content adaptable and distinguishable
- [ ] Color not used as the only visual means of conveying information

#### **Operable**

- [ ] Keyboard accessible
- [ ] Enough time to read and use content
- [ ] No content that could cause seizures
- [ ] Navigable content
- [ ] Input modalities beyond keyboard

#### **Understandable**

- [ ] Readable and understandable text
- [ ] Predictable web pages
- [ ] Input assistance
- [ ] Help users avoid and correct mistakes

#### **Robust**

- [ ] Compatible with current and future user tools
- [ ] Maximize compatibility with assistive technologies

---

**@quality:accessibility - Use these standards for all accessibility implementation and WCAG 2.1 AA compliance**

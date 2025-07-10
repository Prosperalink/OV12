# Security Implementation Quality Context

## **Security-First Development Standards**

### **Core Security Principles**

- **Defense in Depth**: Multiple layers of security controls
- **Principle of Least Privilege**: Minimal access required for functionality
- **Input Validation**: All user input validated and sanitized
- **Secure by Default**: Secure configurations as default

### **Input Validation & Sanitization**

#### **User Input Validation**

```typescript
// ✅ Secure input validation
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
};

const validatePassword = (password: string): boolean => {
  return (
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[0-9]/.test(password)
  );
};
```

#### **API Response Sanitization**

```typescript
// ✅ Sanitize API responses
const sanitizeUserData = (userData: any): SafeUserData => {
  return {
    id: String(userData.id),
    name: String(userData.name).substring(0, 100),
    email: validateEmail(userData.email) ? userData.email : '',
  };
};
```

### **OWASP Top 10 Compliance**

#### **1. Injection Prevention**

- **SQL Injection**: Use parameterized queries, ORM
- **XSS Prevention**: Sanitize output, use CSP headers
- **Command Injection**: Avoid `eval()`, `exec()`

#### **2. Broken Authentication**

- **Session Management**: Secure session handling
- **Password Security**: Strong hashing (bcrypt, Argon2)
- **Multi-Factor Authentication**: Implement MFA where appropriate

#### **3. Sensitive Data Exposure**

- **Data Encryption**: Encrypt sensitive data at rest and in transit
- **HTTPS Only**: Force HTTPS for all communications
- **Secure Headers**: Implement security headers

#### **4. XML External Entity (XXE)**

- **XML Parsing**: Disable external entity processing
- **Input Validation**: Validate XML input

#### **5. Broken Access Control**

- **Authorization**: Implement proper role-based access control
- **Resource Protection**: Protect all resources and endpoints
- **Session Validation**: Validate session on every request

#### **6. Security Misconfiguration**

- **Secure Defaults**: Use secure default configurations
- **Environment Separation**: Separate dev/staging/production
- **Security Headers**: Implement comprehensive security headers

#### **7. Cross-Site Scripting (XSS)**

- **Output Encoding**: Encode all user input in output
- **CSP Headers**: Implement Content Security Policy
- **Input Validation**: Validate and sanitize all input

#### **8. Insecure Deserialization**

- **Safe Deserialization**: Use safe deserialization methods
- **Input Validation**: Validate serialized data
- **Custom Serialization**: Avoid custom serialization

#### **9. Using Components with Known Vulnerabilities**

- **Dependency Scanning**: Regular vulnerability scanning
- **Update Dependencies**: Keep dependencies updated
- **Security Monitoring**: Monitor for new vulnerabilities

#### **10. Insufficient Logging & Monitoring**

- **Comprehensive Logging**: Log security events
- **Real-time Monitoring**: Monitor for suspicious activity
- **Incident Response**: Have incident response procedures

### **React Security Patterns**

#### **Safe Event Handling**

```typescript
// ✅ Secure event handling
const handleSubmit = (event: React.FormEvent) => {
  event.preventDefault();
  const formData = new FormData(event.target as HTMLFormElement);
  const email = formData.get('email') as string;

  if (!validateEmail(email)) {
    setError('Invalid email format');
    return;
  }

  // Process validated data
};
```

#### **Safe State Management**

```typescript
// ✅ Secure state management
const [userData, setUserData] = useState<SafeUserData | null>(null);

const updateUserData = (data: any) => {
  const sanitizedData = sanitizeUserData(data);
  setUserData(sanitizedData);
};
```

### **Authentication & Authorization**

#### **JWT Security**

```typescript
// ✅ Secure JWT handling
const createSecureToken = (userData: SafeUserData): string => {
  const payload = {
    sub: userData.id,
    email: userData.email,
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 60 * 60, // 1 hour
  };

  return jwt.sign(payload, process.env.JWT_SECRET!, { algorithm: 'HS256' });
};
```

#### **Role-Based Access Control**

```typescript
// ✅ RBAC implementation
interface IUser {
  id: string;
  email: string;
  roles: string[];
}

const hasPermission = (user: IUser, permission: string): boolean => {
  const userPermissions = getUserPermissions(user.roles);
  return userPermissions.includes(permission);
};
```

### **API Security**

#### **Request Validation**

```typescript
// ✅ API request validation
const validateApiRequest = (req: any): boolean => {
  return (
    req.headers.authorization &&
    req.body &&
    typeof req.body === 'object' &&
    !Object.keys(req.body).some(key => key.startsWith('__'))
  );
};
```

#### **Rate Limiting**

```typescript
// ✅ Rate limiting implementation
const rateLimiter = new Map<string, { count: number; resetTime: number }>();

const checkRateLimit = (ip: string): boolean => {
  const now = Date.now();
  const userLimit = rateLimiter.get(ip);

  if (!userLimit || now > userLimit.resetTime) {
    rateLimiter.set(ip, { count: 1, resetTime: now + 60000 });
    return true;
  }

  if (userLimit.count >= 100) return false;

  userLimit.count++;
  return true;
};
```

### **Security Headers**

#### **Content Security Policy**

```typescript
// ✅ CSP headers
const securityHeaders = {
  'Content-Security-Policy':
    "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';",
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
};
```

### **Error Handling Security**

#### **Safe Error Messages**

```typescript
// ✅ Secure error handling
const handleError = (error: any): string => {
  console.error('Application error:', error);

  // Don't expose internal errors to users
  return 'An unexpected error occurred. Please try again.';
};
```

### **Data Protection**

#### **Sensitive Data Handling**

```typescript
// ✅ Secure data handling
const maskSensitiveData = (data: any): any => {
  const masked = { ...data };
  if (masked.password) masked.password = '***';
  if (masked.creditCard)
    masked.creditCard = '****-****-****-' + masked.creditCard.slice(-4);
  return masked;
};
```

### **Security Testing**

#### **Security Test Patterns**

```typescript
// ✅ Security testing
describe('Security Tests', () => {
  it('should not expose sensitive data in responses', () => {
    const response = render(<UserProfile user={testUser} />);
    expect(response.container).not.toHaveTextContent('password123');
  });

  it('should validate input properly', () => {
    const mockSubmit = jest.fn();
    render(<LoginForm onSubmit={mockSubmit} />);

    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: '<script>alert("xss")</script>' }
    });

    fireEvent.click(screen.getByText('Submit'));
    expect(mockSubmit).not.toHaveBeenCalled();
  });
});
```

---

**@quality:security - Use these standards for all security-related implementation and user input handling**

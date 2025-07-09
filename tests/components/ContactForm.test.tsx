import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactForm from '../../src/components/ContactForm';

// Mock the AnimationObserver component
jest.mock('../../src/components/AnimationObserver', () => {
  return function MockAnimationObserver({ children, ...props }: any) {
    return <div data-testid="animation-observer" {...props}>{children}</div>;
  };
});

describe('ContactForm', () => {
  beforeEach(() => {
    render(<ContactForm />);
  });

  describe('Form Rendering', () => {
    it('renders all form fields', () => {
      expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/company/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/service interest/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    });

    it('renders submit button', () => {
      expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
    });

    it('renders contact information', () => {
      expect(screen.getByText(/let's create something amazing together/i)).toBeInTheDocument();
      expect(screen.getByText(/hello@orsonvision\.com/i)).toBeInTheDocument();
      expect(screen.getByText(/\+216 XX XXX XXX/i)).toBeInTheDocument();
      expect(screen.getByText(/tunis, tunisia/i)).toBeInTheDocument();
    });
  });

  describe('Form Validation', () => {
    it('shows error for empty required fields on submit', async () => {
      const submitButton = screen.getByRole('button', { name: /send message/i });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText(/please enter a valid name/i)).toBeInTheDocument();
        expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument();
        expect(screen.getByText(/message must be at least 10 characters/i)).toBeInTheDocument();
      });
    });

    it('validates email format', async () => {
      const emailInput = screen.getByLabelText(/email/i);
      fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
      fireEvent.blur(emailInput);

      await waitFor(() => {
        expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument();
      });
    });

    it('validates name format', async () => {
      const nameInput = screen.getByLabelText(/full name/i);
      fireEvent.change(nameInput, { target: { value: '123' } });
      fireEvent.blur(nameInput);

      await waitFor(() => {
        expect(screen.getByText(/please enter a valid name/i)).toBeInTheDocument();
      });
    });

    it('validates message length', async () => {
      const messageInput = screen.getByLabelText(/message/i);
      fireEvent.change(messageInput, { target: { value: 'short' } });
      fireEvent.blur(messageInput);

      await waitFor(() => {
        expect(screen.getByText(/message must be at least 10 characters/i)).toBeInTheDocument();
      });
    });
  });

  describe('Form Submission', () => {
    it('submits form with valid data', async () => {
      // Fill in valid form data
      fireEvent.change(screen.getByLabelText(/full name/i), {
        target: { value: 'John Doe' }
      });
      fireEvent.change(screen.getByLabelText(/email/i), {
        target: { value: 'john@example.com' }
      });
      fireEvent.change(screen.getByLabelText(/message/i), {
        target: { value: 'This is a test message with enough characters to pass validation.' }
      });

      const submitButton = screen.getByRole('button', { name: /send message/i });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText(/thank you!/i)).toBeInTheDocument();
        expect(screen.getByText(/we've received your message/i)).toBeInTheDocument();
      });
    });

    it('shows loading state during submission', async () => {
      // Fill in valid form data
      fireEvent.change(screen.getByLabelText(/full name/i), {
        target: { value: 'John Doe' }
      });
      fireEvent.change(screen.getByLabelText(/email/i), {
        target: { value: 'john@example.com' }
      });
      fireEvent.change(screen.getByLabelText(/message/i), {
        target: { value: 'This is a test message with enough characters to pass validation.' }
      });

      const submitButton = screen.getByRole('button', { name: /send message/i });
      fireEvent.click(submitButton);

      // Check for loading state
      expect(submitButton).toBeDisabled();
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA labels', () => {
      expect(screen.getByLabelText(/full name/i)).toHaveAttribute('aria-invalid');
      expect(screen.getByLabelText(/email/i)).toHaveAttribute('aria-invalid');
      expect(screen.getByLabelText(/message/i)).toHaveAttribute('aria-invalid');
    });

    it('has proper form structure', () => {
      expect(screen.getByRole('form')).toBeInTheDocument();
    });

    it('has proper button roles', () => {
      expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
    });

    it('has proper input types', () => {
      expect(screen.getByLabelText(/email/i)).toHaveAttribute('type', 'email');
      expect(screen.getByLabelText(/phone/i)).toHaveAttribute('type', 'tel');
    });
  });

  describe('User Interactions', () => {
    it('updates form state on input change', () => {
      const nameInput = screen.getByLabelText(/full name/i);
      const emailInput = screen.getByLabelText(/email/i);

      fireEvent.change(nameInput, { target: { value: 'John Doe' } });
      fireEvent.change(emailInput, { target: { value: 'john@example.com' } });

      expect(nameInput).toHaveValue('John Doe');
      expect(emailInput).toHaveValue('john@example.com');
    });

    it('clears errors when user starts typing', async () => {
      const nameInput = screen.getByLabelText(/full name/i);
      
      // Trigger error
      fireEvent.change(nameInput, { target: { value: '123' } });
      fireEvent.blur(nameInput);
      
      await waitFor(() => {
        expect(screen.getByText(/please enter a valid name/i)).toBeInTheDocument();
      });

      // Clear error by typing valid input
      fireEvent.change(nameInput, { target: { value: 'John Doe' } });
      
      await waitFor(() => {
        expect(screen.queryByText(/please enter a valid name/i)).not.toBeInTheDocument();
      });
    });
  });
}); 
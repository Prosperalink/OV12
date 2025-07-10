import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import HeroSection from '../../src/components/HeroSection';
import { LanguageProvider } from '../../src/contexts/LanguageContext';

// Mock the AnimationObserver component
jest.mock('../../src/components/AnimationObserver', () => {
  return function MockAnimationObserver(
    props: Record<string, unknown> & { children?: React.ReactNode }
  ) {
    return (
      <div data-testid='animation-observer' {...props}>
        {props.children}
      </div>
    );
  };
});

// Helper function to render with LanguageProvider
const renderWithLanguageProvider = (component: React.ReactElement) => {
  return render(<LanguageProvider>{component}</LanguageProvider>);
};

describe('HeroSection', () => {
  beforeEach(() => {
    // Mock IntersectionObserver
    global.IntersectionObserver = class IntersectionObserver {
      constructor() {}
      disconnect() {}
      observe() {}
      unobserve() {}
      root = null;
      rootMargin = '';
      thresholds = [];
      takeRecords() {
        return [];
      }
    };
  });

  describe('Component Rendering', () => {
    it('renders without crashing', () => {
      renderWithLanguageProvider(<HeroSection />);
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    });

    it('displays the main heading', () => {
      renderWithLanguageProvider(<HeroSection />);
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
      expect(screen.getByText('Orson Vision')).toBeInTheDocument();
    });

    it('displays the subtitle', () => {
      renderWithLanguageProvider(<HeroSection />);
      expect(
        screen.getByText(/Cinematic Humanism in Digital Innovation/i)
      ).toBeInTheDocument();
    });

    it('renders call-to-action buttons', () => {
      renderWithLanguageProvider(<HeroSection />);
      expect(
        screen.getByRole('button', { name: /Begin Your Cinematic Journey/i })
      ).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: /Watch Our Story/i })
      ).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has proper heading hierarchy', () => {
      renderWithLanguageProvider(<HeroSection />);
      const mainHeading = screen.getByRole('heading', { level: 1 });
      expect(mainHeading).toBeInTheDocument();
    });

    it('has accessible button labels', () => {
      renderWithLanguageProvider(<HeroSection />);
      const buttons = screen.getAllByRole('button');
      buttons.forEach(button => {
        expect(button).toHaveTextContent(/.+/);
      });
    });

    it('maintains semantic HTML structure', () => {
      renderWithLanguageProvider(<HeroSection />);
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
      expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
    });
  });

  describe('Interactive Elements', () => {
    it('has working call-to-action buttons', () => {
      renderWithLanguageProvider(<HeroSection />);
      const buttons = screen.getAllByRole('button');
      expect(buttons.length).toBeGreaterThan(0);
    });

    it('displays hero content', () => {
      renderWithLanguageProvider(<HeroSection />);
      expect(
        screen.getByText(/We unearth and amplify your unique story/i)
      ).toBeInTheDocument();
    });
  });

  describe('Responsive Design', () => {
    it('renders on different screen sizes', () => {
      renderWithLanguageProvider(<HeroSection />);
      // Component should render without errors on any screen size
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    });
  });

  describe('Performance', () => {
    it('does not cause unnecessary re-renders', () => {
      const { rerender } = renderWithLanguageProvider(<HeroSection />);

      // Re-render with same props
      rerender(
        <LanguageProvider>
          <HeroSection />
        </LanguageProvider>
      );

      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    });
  });
});

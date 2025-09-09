import { render } from '@testing-library/react';
import { vi } from 'vitest';
import Home from '@/app/page';

// Mock Next.js Image component
vi.mock('next/image', () => ({
  default: ({ alt, ...props }: { alt: string; [key: string]: unknown }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt} {...props} />
  ),
}));

describe('Home Page', () => {
  it('renders without crashing', () => {
    const { container } = render(<Home />);
    expect(container).toBeInTheDocument();
  });
});

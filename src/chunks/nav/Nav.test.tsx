import { render, screen } from '@/config/test-utils';
import { Nav } from './Nav';

describe('<Nav/>', () => {
  it('links to home page', () => {
    render(<Nav />);
    expect(screen.getByRole('link', { name: /logo/i })).toHaveAttribute('href', '/');
  });
});

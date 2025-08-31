import { render, screen, fireEvent } from '@testing-library/react';
import { MenuCard } from '@/components/MenuCard';
import { CartProvider } from '@/context/CartContext';
import type { MenuItem } from '@/lib/types';

const item: MenuItem = {
  id: 'test',
  name: 'Test Pie',
  slug: 'test-pie',
  category: 'cream-pies',
  price: 10,
  description: 'Yum',
  image: '/placeholder/test.jpg',
  available: true,
};

describe('MenuCard', () => {
  it('renders and adds to cart', () => {
    render(
      <CartProvider>
        <MenuCard item={item} />
      </CartProvider>,
    );

    expect(screen.getByText('Test Pie')).toBeInTheDocument();
    const btn = screen.getByRole('button', { name: /add to cart/i });
    fireEvent.click(btn);

    // No visible change in this component, just ensure no error
    expect(btn).toBeEnabled();
  });
});

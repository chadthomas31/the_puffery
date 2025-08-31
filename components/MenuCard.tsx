"use client";
import { MenuItem } from '@/lib/types';
import { formatCurrency } from '@/lib/utils';
import { useCart } from '@/context/CartContext';

export function MenuCard({ item }: { item: MenuItem }) {
  const { dispatch } = useCart();
  return (
    <article className="card overflow-hidden">
      <div className="aspect-video bg-puff-beige grid place-items-center text-black/50">
        <span className="text-sm">Image: {item.name}</span>
      </div>
      <div className="card-body">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-medium">{item.name}</h3>
            <p className="text-sm text-black/70 mt-1 line-clamp-2">{item.description}</p>
          </div>
          <div className="font-semibold whitespace-nowrap">{formatCurrency(item.price)}</div>
        </div>
        <button
          className="btn btn-primary mt-4 w-full"
          aria-label={`Add ${item.name} to cart`}
          onClick={() => dispatch({ type: 'add', itemId: item.id })}
          disabled={!item.available}
        >
          {item.available ? 'Add to Cart' : 'Sold Out'}
        </button>
      </div>
    </article>
  );
}

"use client";
import { formatCurrency } from '@/lib/utils';
import { useCart } from '@/context/CartContext';

export function CartList() {
  const { itemsDetailed, subtotal, dispatch } = useCart();
  if (itemsDetailed.length === 0) {
    return <p className="text-black/70">Your cart is empty.</p>;
  }
  return (
    <div className="space-y-4">
      {itemsDetailed.map(({ item, qty }) => (
        <div key={item.id} className="flex items-center justify-between gap-4">
          <div>
            <div className="font-medium">{item.name}</div>
            <div className="text-sm text-black/60">{formatCurrency(item.price)} × {qty}</div>
          </div>
          <div className="flex items-center gap-2">
            <input
              aria-label={`Quantity for ${item.name}`}
              type="number"
              min={0}
              max={99}
              value={qty}
              onChange={(e) => dispatch({ type: 'setQty', itemId: item.id, qty: Number(e.target.value) })}
              className="h-9 w-16 rounded-md border border-black/10 bg-white px-2 text-sm"
            />
            <button className="btn btn-secondary" onClick={() => dispatch({ type: 'remove', itemId: item.id })}>Remove</button>
          </div>
        </div>
      ))}
      <div className="flex items-center justify-between border-t border-black/10 pt-4">
        <div className="font-medium">Subtotal</div>
        <div className="font-semibold">{formatCurrency(subtotal)}</div>
      </div>
    </div>
  );
}

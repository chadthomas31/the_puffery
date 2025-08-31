"use client";
import React, { createContext, useContext, useMemo, useReducer, useEffect } from 'react';
import type { CartItem, MenuItem } from '@/lib/types';
import { MENU_ITEMS } from '@/lib/data';

interface CartState {
  items: CartItem[];
}

 type Action =
  | { type: 'add'; itemId: string }
  | { type: 'remove'; itemId: string }
  | { type: 'setQty'; itemId: string; qty: number }
  | { type: 'reset' }
  | { type: 'hydrate'; state: CartState };

function reducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case 'hydrate':
      return action.state;
    case 'add': {
      const existing = state.items.find((i) => i.itemId === action.itemId);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.itemId === action.itemId ? { ...i, qty: Math.min(99, i.qty + 1) } : i,
          ),
        };
      }
      return { items: [...state.items, { itemId: action.itemId, qty: 1 }] };
    }
    case 'remove':
      return { items: state.items.filter((i) => i.itemId !== action.itemId) };
    case 'setQty':
      return {
        items: state.items
          .map((i) => (i.itemId === action.itemId ? { ...i, qty: action.qty } : i))
          .filter((i) => i.qty > 0),
      };
    case 'reset':
      return { items: [] };
    default:
      return state;
  }
}

const CartContext = createContext<{ state: CartState; dispatch: React.Dispatch<Action>; itemsCount: number; subtotal: number; itemsDetailed: Array<CartItem & { item: MenuItem }>; } | null>(
  null,
);

const STORAGE_KEY = 'puffery_cart_v1';

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { items: [] });

  // hydrate from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) dispatch({ type: 'hydrate', state: JSON.parse(raw) });
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // persist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {}
  }, [state]);

  const itemsDetailed = useMemo(() => {
    return state.items
      .map((ci) => ({ ...ci, item: MENU_ITEMS.find((m) => m.id === ci.itemId)! }))
      .filter((i) => i.item);
  }, [state.items]);

  const itemsCount = itemsDetailed.reduce((acc, i) => acc + i.qty, 0);
  const subtotal = itemsDetailed.reduce((acc, i) => acc + i.qty * i.item.price, 0);

  const value = useMemo(
    () => ({ state, dispatch, itemsCount, subtotal, itemsDetailed }),
    [state, itemsCount, subtotal, itemsDetailed],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}

"use client";
import Link from 'next/link';
import { Logo } from './Logo';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { DarkModeToggle } from '@/components/DarkModeToggle';

export function SiteHeader() {
  const { itemsCount } = useCart();
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-neutral-900/80">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <Logo />
            <span className="font-display text-xl">The Puffery</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/menu" className="hover:underline">Menu</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/order" className="hover:underline">Order</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/order" className="btn btn-primary hidden sm:inline-flex">Order Now</Link>
          <Link href="/order" aria-label="Cart" className="relative inline-flex">
            <ShoppingCart />
            {itemsCount > 0 && (
              <span className="absolute -right-2 -top-2 rounded-full bg-puff-brown px-1.5 text-[10px] text-white">
                {itemsCount}
              </span>
            )}
          </Link>
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
}

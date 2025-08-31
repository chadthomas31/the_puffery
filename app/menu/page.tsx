'use client';
import { useMemo, useState } from 'react';
import { Category } from '@/lib/types';
import { MENU_ITEMS } from '@/lib/data';
import { CategoryTabs } from '@/components/CategoryTabs';
import { MenuCard } from '@/components/MenuCard';
import { Section } from '@/components/Section';

export default function MenuPage() {
  const [category, setCategory] = useState<Category>('cream-pies');
  const [query, setQuery] = useState('');

  const items = useMemo(() => {
    return MENU_ITEMS.filter((m) => m.category === category && (
      m.name.toLowerCase().includes(query.toLowerCase()) ||
      m.description.toLowerCase().includes(query.toLowerCase())
    ));
  }, [category, query]);

  return (
    <>
      <Section title="Menu">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <CategoryTabs value={category} onChange={setCategory} />
          <input
            type="search"
            placeholder="Search…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-10 rounded-md border border-black/10 bg-white px-3 text-sm shadow-sm"
            aria-label="Search menu"
          />
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </Section>
    </>
  );
}

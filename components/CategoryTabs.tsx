"use client";
import { Category } from '@/lib/types';

const CATEGORIES: { key: Category; label: string }[] = [
  { key: 'cream-pies', label: 'Cream Pies' },
  { key: 'cream-puffs', label: 'Cream Puffs' },
  { key: 'seasonal', label: 'Seasonal' },
  { key: 'drinks', label: 'Drinks' },
];

export function CategoryTabs({ value, onChange }: { value: Category; onChange: (c: Category) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {CATEGORIES.map((c) => (
        <button
          key={c.key}
          className={
            'btn ' + (value === c.key ? 'btn-primary' : 'btn-secondary')
          }
          onClick={() => onChange(c.key)}
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}

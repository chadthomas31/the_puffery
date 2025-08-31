'use client';
import { useState } from 'react';
import { MENU_ITEMS } from '@/lib/data';

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState('');

  if (!authed) {
    return (
      <div className="mx-auto max-w-md px-4 py-16">
        <h1 className="h2">Admin Login</h1>
        <p className="mt-2 text-sm text-black/70">Enter password from NEXT_PUBLIC_ADMIN_PASSWORD.</p>
        <input
          type="password"
          className="mt-4 h-10 w-full rounded-md border border-black/10 bg-white px-3 text-sm"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="btn btn-primary mt-4 w-full"
          onClick={() => setAuthed(password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD)}
        >
          Continue
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="h2">Admin Menu (Read-only placeholder)</h1>
      <div className="mt-6 grid gap-4">
        {MENU_ITEMS.map((m) => (
          <div key={m.id} className="card"><div className="card-body flex items-center justify-between">
            <div>
              <div className="font-medium">{m.name}</div>
              <div className="text-sm text-black/60">{m.category} — ${m.price}</div>
            </div>
            <button className="btn btn-secondary" disabled>Edit</button>
          </div></div>
        ))}
      </div>
    </div>
  );
}

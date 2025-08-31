export function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-black/5">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 md:grid-cols-3 text-sm">
        <div>
          <p className="font-display text-lg">The Puffery</p>
          <p className="mt-2 text-black/60">Artisan cream pies & puffs</p>
        </div>
        <div>
          <p className="font-medium">Hours</p>
          <p className="text-black/60">Thu–Sun 10am–4pm</p>
        </div>
        <div>
          <p className="font-medium">Visit</p>
          <p className="text-black/60">123 Bakery Lane, Your City</p>
        </div>
      </div>
      <div className="py-4 text-center text-xs text-black/50">© {new Date().getFullYear()} The Puffery</div>
    </footer>
  );
}

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="h2 mb-6">{title}</h2>
      {children}
    </section>
  );
}

import { Section } from '@/components/Section';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <Section title="Our Story">
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div className="relative aspect-square md:aspect-[3/4] overflow-hidden rounded-xl bg-puff-beige">
            <Image
              src="/images/chynna.png"
              alt="Chynna Dunn"
              fill
              className="object-cover object-[center_60%]"
              priority
            />
          </div>
          <div className="prose max-w-none dark:prose-invert">
            <p>
              The Puffery is the craft bakery of Chynna Dunn—pastry chef, cream pie
              whisperer, and lover of small, beautiful details. We bake in small batches with
              premium ingredients and a focus on texture and balance.
            </p>
            <p>
              From our flaky pâte sucrée to silky custards and light-as-air chantilly, each pie and
              puff is made with care.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Values">
        <div className="grid gap-6 md:grid-cols-3">
          <Value title="Sourcing" desc="Real Madagascar vanilla, single-origin chocolate, local fruit." />
          <Value title="Craft" desc="Patience, technique, and attention to detail." />
          <Value title="Community" desc="Baked for celebrations, gatherings, and everyday joy." />
        </div>
      </Section>

      <Section title="Kitchen & Bakes">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-video rounded-lg bg-puff-beige" />
          ))}
        </div>
      </Section>
    </>
  );
}

function Value({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="card">
      <div className="card-body">
        <p className="h3">{title}</p>
        <p className="mt-2 text-black/70">{desc}</p>
      </div>
    </div>
  );
}

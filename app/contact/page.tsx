import { Section } from '@/components/Section';

export default function ContactPage() {
  return (
    <Section title="Contact">
      <form className="max-w-xl space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input className="mt-1 h-10 w-full rounded-md border border-black/10 bg-white px-3 text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" className="mt-1 h-10 w-full rounded-md border border-black/10 bg-white px-3 text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea className="mt-1 w-full rounded-md border border-black/10 bg-white px-3 py-2 text-sm" rows={4} />
        </div>
        <button className="btn btn-primary" type="button">Send</button>
      </form>
    </Section>
  );
}

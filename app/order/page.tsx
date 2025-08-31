import { Section } from '@/components/Section';
import { CartList } from '@/components/CartList';
import { CheckoutForm } from '@/components/CheckoutForm';

export default function OrderPage() {
  return (
    <Section title="Your Order">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="card"><div className="card-body"><CartList /></div></div>
        <div className="card"><div className="card-body"><CheckoutForm /></div></div>
      </div>
    </Section>
  );
}

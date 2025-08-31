"use client";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

const OrderSchema = z.object({
  customerName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  pickupDate: z.string(),
  pickupTime: z.string(),
  notes: z.string().optional(),
});

export type OrderFormValues = z.infer<typeof OrderSchema>;

export function CheckoutForm() {
  const { state, dispatch } = useCart();
  const [orderId, setOrderId] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<OrderFormValues>({ resolver: zodResolver(OrderSchema) });

  async function onSubmit(values: OrderFormValues) {
    const res = await fetch('/api/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...values, items: state.items }),
    });
    if (!res.ok) {
      alert('Failed to submit order');
      return;
    }
    const data = await res.json();
    setOrderId(data.id);
    dispatch({ type: 'reset' });
  }

  if (orderId) {
    return (
      <div className="card">
        <div className="card-body">
          <p className="h3">Thank you!</p>
          <p className="mt-2">Your order has been received. Confirmation #{orderId}.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input className="mt-1 h-10 w-full rounded-md border border-black/10 bg-white px-3 text-sm" {...register('customerName')} />
          {errors.customerName && <p className="text-sm text-red-600">{errors.customerName.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input className="mt-1 h-10 w-full rounded-md border border-black/10 bg-white px-3 text-sm" type="email" {...register('email')} />
          {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">Phone</label>
          <input className="mt-1 h-10 w-full rounded-md border border-black/10 bg-white px-3 text-sm" {...register('phone')} />
          {errors.phone && <p className="text-sm text-red-600">{errors.phone.message}</p>}
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium">Pickup Date</label>
            <input className="mt-1 h-10 w-full rounded-md border border-black/10 bg-white px-3 text-sm" type="date" {...register('pickupDate')} />
            {errors.pickupDate && <p className="text-sm text-red-600">{errors.pickupDate.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium">Pickup Time</label>
            <input className="mt-1 h-10 w-full rounded-md border border-black/10 bg-white px-3 text-sm" type="time" {...register('pickupTime')} />
            {errors.pickupTime && <p className="text-sm text-red-600">{errors.pickupTime.message}</p>}
          </div>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium">Notes</label>
        <textarea className="mt-1 w-full rounded-md border border-black/10 bg-white px-3 py-2 text-sm" rows={4} {...register('notes')} />
      </div>
      <button className="btn btn-primary" type="submit" disabled={isSubmitting}>Place Order</button>
    </form>
  );
}

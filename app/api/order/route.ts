import { NextRequest, NextResponse } from 'next/server';
import { MENU_ITEMS } from '@/lib/data';
import type { OrderInput, OrderStored } from '@/lib/types';

const ORDERS: OrderStored[] = [];

export async function POST(req: NextRequest) {
  const body = (await req.json()) as Partial<OrderInput>;
  if (!body || !Array.isArray(body.items) || body.items.length === 0) {
    return NextResponse.json({ error: 'Invalid items' }, { status: 400 });
  }
  if (!body.customerName || !body.email || !body.phone || !body.pickupDate || !body.pickupTime) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  const itemsDetailed = body.items
    .map((ci) => ({ ...ci, item: MENU_ITEMS.find((m) => m.id === ci.itemId) }))
    .filter((i) => i.item);

  if (itemsDetailed.length === 0) {
    return NextResponse.json({ error: 'No valid items' }, { status: 400 });
  }

  const total = itemsDetailed.reduce((acc, i) => acc + (i!.qty as number) * (i!.item!.price as number), 0);
  const id = String(1000 + ORDERS.length);
  const order: OrderStored = {
    id,
    createdAt: new Date().toISOString(),
    total,
    items: body.items as any,
    customerName: body.customerName!,
    email: body.email!,
    phone: body.phone!,
    pickupDate: body.pickupDate!,
    pickupTime: body.pickupTime!,
    notes: body.notes,
  };
  ORDERS.push(order);
  return NextResponse.json({ id, total });
}

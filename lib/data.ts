import { MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'vanilla-classic',
    name: 'Classic Vanilla Cream Pie',
    slug: 'classic-vanilla-cream-pie',
    category: 'cream-pies',
    price: 28,
    description:
      'Silky Madagascar vanilla custard in a buttery pâte sucrée crust, topped with softly whipped cream.',
    image: '/placeholder/vanilla.jpg',
    available: true,
    tags: ['signature', 'best-seller'],
  },
  {
    id: 'chocolate-silk',
    name: 'Chocolate Silk Cream Pie',
    slug: 'chocolate-silk-cream-pie',
    category: 'cream-pies',
    price: 30,
    description:
      'Bittersweet chocolate custard with a touch of espresso, finished with chantilly and cacao nibs.',
    image: '/placeholder/chocolate.jpg',
    available: true,
    tags: ['chocolate'],
  },
  {
    id: 'matcha-velvet',
    name: 'Matcha Velvet Cream Pie',
    slug: 'matcha-velvet-cream-pie',
    category: 'cream-pies',
    price: 32,
    description:
      'Ceremonial-grade matcha custard, light and earthy, paired with a crisp crust and cream.',
    image: '/placeholder/matcha.jpg',
    available: true,
    tags: ['tea', 'green'],
  },
  {
    id: 'strawberries-cream',
    name: 'Strawberries & Cream Pie',
    slug: 'strawberries-and-cream-pie',
    category: 'cream-pies',
    price: 34,
    description:
      'Vanilla diplomat cream layered with macerated local strawberries, topped with strawberry whip.',
    image: '/placeholder/strawberry.jpg',
    available: true,
    tags: ['seasonal'],
  },
  {
    id: 'banana-cream',
    name: 'Banana Cream Pie',
    slug: 'banana-cream-pie',
    category: 'cream-pies',
    price: 30,
    description:
      'Caramelized banana custard, fresh banana slices, and vanilla whip in a flaky crust.',
    image: '/placeholder/banana.jpg',
    available: true,
  },
  {
    id: 'coconut-cloud',
    name: 'Coconut Cloud Cream Pie',
    slug: 'coconut-cloud-cream-pie',
    category: 'cream-pies',
    price: 30,
    description:
      'Toasted coconut custard and coconut whip with crunchy coconut flakes on top.',
    image: '/placeholder/coconut.jpg',
    available: true,
  },
  {
    id: 'salted-caramel',
    name: 'Salted Caramel Cream Pie',
    slug: 'salted-caramel-cream-pie',
    category: 'cream-pies',
    price: 32,
    description:
      'Brown sugar custard swirled with house caramel and sea salt, topped with cream.',
    image: '/placeholder/caramel.jpg',
    available: true,
  },
  {
    id: 'seasonal-rotating',
    name: 'Seasonal Chef’s Pick',
    slug: 'seasonal-chefs-pick',
    category: 'seasonal',
    price: 34,
    description:
      'Ask about this week’s seasonal cream pie, inspired by peak produce and mood.',
    image: '/placeholder/seasonal.jpg',
    available: true,
  },
  {
    id: 'vanilla-puff',
    name: 'Vanilla Cream Puff',
    slug: 'vanilla-cream-puff',
    category: 'cream-puffs',
    price: 6,
    description:
      'Craquelin-topped choux puff filled with Madagascar vanilla crème légère.',
    image: '/placeholder/puff-vanilla.jpg',
    available: true,
  },
  {
    id: 'mocha-puff',
    name: 'Mocha Cream Puff',
    slug: 'mocha-cream-puff',
    category: 'cream-puffs',
    price: 6,
    description:
      'Espresso-kissed chocolate cream in a crisp choux puff with chocolate drizzle.',
    image: '/placeholder/puff-mocha.jpg',
    available: true,
  },
  {
    id: 'cold-brew',
    name: 'Cold Brew Coffee',
    slug: 'cold-brew-coffee',
    category: 'drinks',
    price: 4,
    description: 'Slow-steeped, smooth and chocolatey. Perfect with pie.',
    image: '/placeholder/drink-coldbrew.jpg',
    available: true,
  }
];

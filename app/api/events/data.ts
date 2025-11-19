export interface DevelopmentEvent {
  id: string;
  name: string;
  date: string;
  ticketCost: number;
  hasFood: boolean;
}

// Mock database - local array of development events
export let events: DevelopmentEvent[] = [
  {
    id: '1',
    name: 'React Mastery Workshop',
    date: '2025-12-10',
    ticketCost: 49.99,
    hasFood: true,
  },
  {
    id: '2',
    name: 'Next.js Advanced Patterns',
    date: '2025-12-15',
    ticketCost: 59.99,
    hasFood: true,
  },
  {
    id: '3',
    name: 'TypeScript Deep Dive',
    date: '2025-12-20',
    ticketCost: 39.99,
    hasFood: false,
  },
  {
    id: '4',
    name: 'Web Performance Optimization',
    date: '2025-12-28',
    ticketCost: 44.99,
    hasFood: true,
  },
  {
    id: '5',
    name: 'Full Stack JavaScript Bootcamp',
    date: '2026-01-15',
    ticketCost: 99.99,
    hasFood: true,
  },
];

export function updateEvents(newEvents: DevelopmentEvent[]) {
  events = newEvents;
}

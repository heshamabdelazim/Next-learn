export interface DevelopmentEvent {
  id: string;
  name: string;
  date: string;
  ticketCost: number;
  hasFood: boolean;
}

let events: DevelopmentEvent[] = [
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

export function getEvents() {
  return events;
}

export function getEventById(id: string) {
  return events.find((e) => e.id === id);
}

export function addEvent(event: Omit<DevelopmentEvent, 'id'>) {
  const newId = (Math.max(...events.map((e) => parseInt(e.id)), 0) + 1).toString();
  const newEvent: DevelopmentEvent = { ...event, id: newId };
  events.push(newEvent);
  return newEvent;
}

export function updateEvent(id: string, updates: Partial<Omit<DevelopmentEvent, 'id'>>) {
  const index = events.findIndex((e) => e.id === id);
  if (index === -1) return null;
  
  events[index] = { ...events[index], ...updates };
  return events[index];
}

export function deleteEvent(id: string) {
  const index = events.findIndex((e) => e.id === id);
  if (index === -1) return null;
  
  const deleted = events[index];
  events.splice(index, 1);
  return deleted;
}

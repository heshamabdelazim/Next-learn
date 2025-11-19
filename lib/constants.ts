export interface Event {
  slug: string;
  image: string;
  title: string;
  location: string;
  date: string;
  time: string;
}

export const events: Event[] = [
  {
    slug: "1",
    image: "/images/event1.png",
    title: "React Conference 2025",
    location: "San Francisco, CA",
    date: "2025-12-15",
    time: "09:00 AM",
  },
  {
    slug: "2",
    image: "/images/event2.png",
    title: "JavaScript Hackathon",
    location: "New York, NY",
    date: "2025-12-20",
    time: "10:00 AM",
  },
  {
    slug: "3",
    image: "/images/event3.png",
    title: "Node.js Summit",
    location: "Austin, TX",
    date: "2025-12-28",
    time: "08:30 AM",
  },
  {
    slug: "4",
    image: "/images/event4.png",
    title: "Web Development Bootcamp",
    location: "Seattle, WA",
    date: "2026-01-10",
    time: "02:00 PM",
  },
  {
    slug: "5",
    image: "/images/event5.png",
    title: "TypeScript Developer Meetup",
    location: "Boston, MA",
    date: "2026-01-15",
    time: "06:00 PM",
  },
  {
    slug: "6",
    image: "/images/event6.png",
    title: "Next.js Workshop",
    location: "Los Angeles, CA",
    date: "2026-01-22",
    time: "11:00 AM",
  },
];

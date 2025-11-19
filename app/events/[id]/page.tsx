
import { events } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

interface Props {
  params: {
    id: string;
  };
}

export default async function EventPage({ params }: Props) {
  const {id}=await params
  const event = events.find((e) => e.slug === id);

  if (!event) {
    return (
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Event Not Found</h1>
        <p className="mb-6">Sorry, the event you're looking for doesn't exist.</p>
        <Link href="/" className="text-blue-600 hover:underline">
          Back to Home
        </Link>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 py-8">
      <Link href="/" className="text-blue-600 hover:underline mb-6 inline-block">
        ← Back to Home
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative w-full h-96">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4">{event.title}</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 bg-gray-50 p-6 rounded-lg">
            <div>
              <h3 className="text-sm font-semibold text-gray-600 mb-2">
                📅 Date
              </h3>
              <p className="text-lg font-bold">
                {new Date(event.date).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-600 mb-2">
                🕐 Time
              </h3>
              <p className="text-lg font-bold">{event.time}</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-600 mb-2">
                📍 Location
              </h3>
              <p className="text-lg font-bold">{event.location}</p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">About This Event</h2>
            <p className="text-gray-700 leading-relaxed">
              Join us for {event.title}, a premier gathering of developers,
              designers, and tech enthusiasts from around the world. This event
              brings together industry leaders to share insights, showcase latest
              technologies, and network with fellow professionals.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">What to Expect</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-3">✨</span>
                <span>
                  Keynote speeches from industry experts and thought leaders
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">🎯</span>
                <span>
                  Technical workshops and hands-on training sessions
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">🤝</span>
                <span>Networking opportunities with professionals in the field</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">🏆</span>
                <span>Competitions and challenges with exciting prizes</span>
              </li>
            </ul>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-200">
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
}
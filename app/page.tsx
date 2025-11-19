import ExploreBtn from "@/components/ExploreBtn";
import { events } from "@/lib/constants";
import Link from "next/link";

export default function Home() {
  return (
    <section className="">
      <h1 className="text-center">The Hub for every Dev <br /> Event You Can't Miss </h1>
      <p className="text-center mt-5">Hackathons, Meetups, and Conferences, All in one place</p>
      <ExploreBtn />
      <ul id="events">
        {events.map(event => (
        <li key={event.slug}>
            <Link href={ `/events/${event.slug}`}>{event.title}</Link>
        </li>
      ))
        }
        
      </ul>
    </section>
  );
}

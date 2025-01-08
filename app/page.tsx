import Comments from "@/components/layouts/comments";
import Home from "@/components/layouts/home";
import Location from "@/components/layouts/location";
import RSVPAndGifts from "@/components/layouts/rsvp-gifts";
import Schedule from "@/components/layouts/schedule";
import Story from "@/components/layouts/story";

export default function Main() {
  return (
    <main className="relative h-fit w-full">
      <Home />
      <Location />
      <Schedule />
      <Story />
      <RSVPAndGifts />
      <Comments />
    </main>
  );
}

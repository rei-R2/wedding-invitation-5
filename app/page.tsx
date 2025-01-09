import Comments from "@/components/layouts/comments";
import Home from "@/components/layouts/home";
import Location from "@/components/layouts/location";
import RSVPAndGifts from "@/components/layouts/rsvp-gifts";
import Schedule from "@/components/layouts/schedule";
import Story from "@/components/layouts/story";
import { Slide, ToastContainer } from "react-toastify";

export default function Main() {
  return (
    <main className="relative h-fit w-full">
      <Home />
      <Location />
      <Schedule />
      <Story />
      <RSVPAndGifts />
      <Comments />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
    </main>
  );
}

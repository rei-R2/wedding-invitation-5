import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-1 flex-col items-center justify-center px-10">
      <div className="mb-10 h-fit w-fit">
        <h1 className="text-center font-italiana text-5xl">Daria</h1>
        <p className="text-center font-tangerine text-4xl font-semibold">&</p>
        <h1 className="text-center font-italiana text-5xl">Anton</h1>
      </div>
      <Image
        src="/home.png"
        className="mb-10 w-64 object-cover"
        alt="home-img"
        width={1000}
        height={1000}
        priority
      />
      <div className="mb-10">
        <p className="mb-2 text-center font-tangerine text-4xl font-semibold">
          We&apos;re Getting Married!
        </p>
        <p className="mx-auto text-center font-helvetica text-xs">
          We are delighted to invite you to join us in celebrating our wedding.
          Your presence would mean so much to us. We look forward to celebrating
          together!
        </p>
      </div>
    </div>
  );
}

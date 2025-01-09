export default function Schedule() {
  return (
    <div className="flex min-h-screen flex-col justify-center px-3 py-20 md:py-28 lg:px-10">
      <div className="mb-32 flex items-end justify-between md:mb-48 lg:justify-center lg:gap-x-96">
        <div className="">
          <p className="font-tangerine text-4xl font-semibold md:text-5xl">
            Event
          </p>
          <p className="font-tangerine text-4xl font-semibold md:text-5xl">
            Schedule
          </p>
        </div>
        <p className="mb-1 text-center text-xs font-medium md:text-sm">
          7 Januari 2024
        </p>
      </div>
      <div className="grid grid-cols-2 gap-x-2 gap-y-10">
        <div>
          <p className="mb-2 text-end text-sm md:text-base">
            8:00 am - 10:00 am
          </p>
          <p className="text-end font-helvetica-bold text-xl md:text-2xl">
            Akad Nikah
          </p>
          <p className="mb-1 text-end text-xs md:mb-2 md:ps-16 md:text-sm lg:ps-48">
            Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan
            pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu
            merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan
            kasih sayang. Sesungguhnya pada yang demikian itu benar-benar
            terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
          </p>
          <p className="text-end text-sm md:text-base">(Ar-Rum · Ayat 21)</p>
        </div>
        <div />
        <div />
        <div className="flex flex-col justify-end">
          <p className="mb-2 text-sm md:text-base">11:00 am - Sampai Selesai</p>
          <p className="font-helvetica-bold text-xl md:text-2xl">
            Resepsi Pernikahan
          </p>
          <p className="text-xs md:pe-16 md:text-sm lg:pe-48">
            Dengan penuh rasa syukur dan kebahagiaan, kami mengundang
            Bapak/Ibu/Saudara/i untuk hadir dalam acara resepsi pernikahan kami.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Schedule() {
  return (
    <div className="flex min-h-screen flex-col justify-center px-3 py-20">
      <div className="mb-32 flex items-end justify-between">
        <div className="">
          <p className="font-tangerine text-4xl font-semibold">Event</p>
          <p className="font-tangerine text-4xl font-semibold">Schedule</p>
        </div>
        <p className="mb-1 text-center text-xs font-medium">7 Januari 2024</p>
      </div>
      <div className="grid grid-cols-2 gap-x-2 gap-y-10">
        <div>
          <p className="mb-2 text-end text-sm">8:00 am - 10:00 am</p>
          <p className="text-end font-helvetica-bold text-xl">Akad Nikah</p>
          <p className="mb-1 text-end text-xs">
            Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan
            pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu
            merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan
            kasih sayang. Sesungguhnya pada yang demikian itu benar-benar
            terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
          </p>
          <p className="text-end text-sm">(Ar-Rum · Ayat 21)</p>
        </div>
        <div />
        <div />
        <div className="flex flex-col justify-end">
          <p className="mb-2 text-sm">11:00 am - Sampai Selesai</p>
          <p className="font-helvetica-bold text-xl">Resepsi Pernikahan</p>
          <p className="text-xs">
            Dengan penuh rasa syukur dan kebahagiaan, kami mengundang
            Bapak/Ibu/Saudara/i untuk hadir dalam acara resepsi pernikahan kami.
          </p>
        </div>
      </div>
    </div>
  );
}

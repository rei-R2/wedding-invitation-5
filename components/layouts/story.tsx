import Image from "next/image";

export default function Story() {
  return (
    <div className="px-3 py-20">
      <div className="flex flex-col">
        <div className="">
          <Image
            src="/story.png"
            alt="story-img"
            className="object-cover"
            width={1000}
            height={1000}
          />
        </div>
        <div className="mt-20 flex flex-col justify-between">
          <p className="mb-5 font-tangerine text-6xl font-semibold">
            Our Story
          </p>
          <div className="">
            <p className="mb-3 text-sm">
              Pada bulan April 2011, Nicole dan Lionell bertemu di sebuah cafe.
              Meskipun tidak mencari hubungan, mereka merasakan koneksi yang
              tidak pernah mereka rasakan sebelumnya. Setelah ngobrol satu sama
              lain setiap hari selama berminggu-minggu, berbagi cerita tentang
              pengalaman masa lalu, impian untuk masa depan, dan segala hal di
              antaranya, mereka menjadi tak terpisahkan. Keduanya mulai
              menghabiskan lebih banyak waktu bersama, akhirnya mereke menemukan
              bahwa hubungan mereka jauh lebih dalam dari yang mereka harapkan.
              Mereka jatuh cinta, dan hal itu menjadi tak terbantahkan.
            </p>
            <p className="mb-3 text-sm">
              Dua hati yang saling ditakdirkan. Lionell dan Nicole adalah bukti
              hidup bahwa bahkan cerita yang paling tidak mungkin bisa berubah
              menjadi romansa yang indah yang bertahan seumur hidup. Dua belas
              tahun kemudian, mereka memilih untuk selamanya. Cinta adalah
              perjalanan yang tak terduga!
            </p>
            <p className="text-sm">
              Bergabunglah dengan Lionell dan Nicole saat mereka membawa Anda
              dalam perjalanan Cinta Abadi Sejati mereka!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
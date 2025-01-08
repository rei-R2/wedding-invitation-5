"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast, Slide } from "react-toastify";
import z from "zod";

interface SubmitValue {
  name: string;
  total: number;
  confirm: "present" | "not_present";
}

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Nama minimal 2 karakter." })
    .max(250, { message: "Nama maksimal 250 karakter." }),
  total: z.coerce
    .number()
    .min(1, { message: "Jumlah orang minimal 1 orang." })
    .max(10, { message: "Jumlah orang maksimal 10 orang." }),
  confirm: z.enum(["present", "not_present"], {
    message: "Pilih hadir atau tidak hadir.",
  }),
});

export default function RSVPAndGifts() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const [isLoading, setIsloading] = useState(false);

  const handleSubmitRSVP = async (value: SubmitValue) => {
    setIsloading(true);
    const result = await axios.post("/api/rsvp", value);

    console.log({ RSVP: result.data });

    if (result.status === 200) {
      toast("Berhasil mengirim RSVP.");
      setIsloading(false);
    } else {
      toast("Gagal mengirim RSVP.");
      setIsloading(false);
    }

    reset();
  };

  const handleCopyRek = (rek: string) => {
    navigator.clipboard
      .writeText(rek)
      .then(() => {
        toast("Berhasil copy no.Rekening");
      })
      .catch((err) => {
        console.error("Error copying text: ", err);
      });
  };

  return (
    <div className="px-3 py-20">
      {/* rsvp */}
      <div className="mb-20">
        <p className="font-helvetica-bold text-xl">RSVP</p>
        <p className="w-2/3 font-helvetica text-xs">
          Jika anda berkenan hadir, silahkan isi form kehadiran berikut.
        </p>

        <form
          onSubmit={handleSubmit(handleSubmitRSVP)}
          className="mt-10 flex flex-col"
        >
          <div className="flex gap-x-2">
            {/* field name */}
            <div className="flex w-2/3 flex-col gap-y-1">
              <input
                type="text"
                placeholder="Nama"
                className="w-full rounded-lg border border-zinc-300 px-4 py-2 text-sm"
                {...register("name")}
              />
              {errors.name && (
                <span className="text-xs text-red-700">
                  *{errors.name.message}
                </span>
              )}
            </div>
            {/* field total */}
            <div className="relative h-fit w-1/3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-person-fill absolute left-3 top-2 size-5"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
              <input
                type="number"
                min={1}
                max={10}
                defaultValue={1}
                className="w-full rounded-lg border border-zinc-300 py-2 pe-4 ps-10 text-sm"
                {...register("total")}
              />
              {errors.total && (
                <span className="text-xs text-red-700">
                  *{errors.total.message}
                </span>
              )}
            </div>
          </div>
          <div className="mt-5">
            <p className="mb-2 font-helvetica text-sm">
              Apakah Anda Bersedia Datang?
            </p>
            <div className="flex gap-x-5">
              <div className="flex gap-x-2">
                <input
                  id="present"
                  type="radio"
                  value="present"
                  {...register("confirm")}
                />
                <label htmlFor="present" className="font-helvetica text-xs">
                  Hadir
                </label>
              </div>
              <div className="flex gap-x-2">
                <input
                  id="not_present"
                  type="radio"
                  value="not_present"
                  {...register("confirm")}
                />
                <label htmlFor="not_present" className="font-helvetica text-xs">
                  Tidak Hadir
                </label>
              </div>
            </div>
            {errors.confirm && (
              <span className="text-xs text-red-700">
                *{errors.confirm.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="mt-5 w-full bg-zinc-200 p-3 font-helvetica text-base font-semibold"
          >
            {!isLoading ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-send-fill mx-auto size-5"
                viewBox="0 0 16 16"
              >
                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
              </svg>
            ) : (
              "Loading..."
            )}
          </button>
        </form>
      </div>

      {/* gifts */}
      <div className="">
        <p className="font-helvetica-bold text-xl">Gifts</p>
        <p className="w-2/3 font-helvetica text-xs">
          Anda dapat mengirim hadiah melalui rekening berikut.
        </p>
        <div className="mt-10 flex">
          <div className="w-1/2">
            <p className="font-helvetica text-sm">BCA</p>
            <p className="mb-2 font-helvetica-bold text-2xl">782934753</p>
            <p className="font-helvetica text-base">Daria</p>
            <button
              onClick={() => handleCopyRek("782934753")}
              className="bg-black px-2 font-helvetica text-sm text-white"
            >
              Copy Rekening
            </button>
          </div>
          <div className="w-1/2">
            <p className="font-helvetica text-sm">MANDIRI</p>
            <p className="mb-2 font-helvetica-bold text-2xl">598375837</p>
            <p className="font-helvetica text-base">Anton</p>
            <button
              onClick={() => handleCopyRek("598375837")}
              className="bg-black px-2 font-helvetica text-sm text-white"
            >
              Copy Rekening
            </button>
          </div>
        </div>
      </div>

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
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import {
  createComment,
  getComments,
} from "../../utils/firebase/service-firebase";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { toast } from "react-toastify";
import { format } from "timeago.js";

interface Comment {
  created_at?: number;
  message: string;
  name: string;
}

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Nama minimal 2 karakter." })
    .max(250, { message: "Nama maksimal 250 karakter" }),
  message: z
    .string()
    .min(3, { message: "Pesan minimal 3 karakter." })
    .max(500, { message: "Pesan maksimal 500 karakter." }),
});

export default function Comments() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsloading] = useState(false);

  const getCommments = async () => {
    const comments = await getComments();

    if (comments.status === 200) {
      const listComments = comments.data.sort(
        (a, b) => b.created_at - a.created_at,
      );
      setComments(listComments as Comment[]);
    }
  };

  useEffect(() => {
    getCommments();
  }, []);

  const handleComment = async (value: Comment) => {
    setIsloading(true);
    const sendComment = value;
    sendComment.created_at = Date.now();
    const result = await createComment(sendComment);

    if (result.status === 200) {
      toast("Berhasil mengirim pesan.");
      getCommments();
      setIsloading(false);
      reset();
    } else {
      toast("Gagal mengirim pesan.");
      setIsloading(false);
      reset();
    }
  };

  return (
    <div className="px-3 py-20 md:py-28 lg:flex lg:gap-x-20 lg:px-10">
      <div className="w-full lg:w-1/2">
        <p className="text-end font-helvetica-bold text-xl md:text-2xl lg:text-start">
          Comments
        </p>
        <p className="text-end font-helvetica text-xs md:text-sm lg:text-start">
          Sampaikan ucapan untuk kedua mempelai.
        </p>

        <form className="mt-10" onSubmit={handleSubmit(handleComment)}>
          <div className="mb-3 w-full">
            <input
              type="text"
              placeholder="Nama"
              className="w-full rounded-lg border border-zinc-300 px-4 py-2 text-sm md:text-base"
              {...register("name")}
            />
            {errors.name && (
              <span className="text-xs text-red-700 md:text-sm">
                *{errors.name.message}
              </span>
            )}
          </div>
          <div className="mb-3 w-full">
            <textarea
              placeholder="Pesan"
              className="h-36 w-full rounded-lg border border-zinc-300 px-4 py-2 text-sm md:h-44 md:text-base"
              {...register("message")}
            />
            {errors.message && (
              <span className="text-xs text-red-700 md:text-sm">
                *{errors.message.message}
              </span>
            )}
          </div>
          <button className="w-full rounded-lg bg-black p-3 font-helvetica-bold text-sm text-zinc-400">
            {!isLoading ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-send-fill mx-auto size-5 text-white"
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

      <div className="mt-10 w-full lg:mt-24 lg:w-1/2">
        {comments.map((msg, i) => (
          <div key={i} className="mb-3 flex">
            {/* profile image */}
            <div className="mr-3 w-10">
              <div className="flex size-9 items-center justify-center rounded-full bg-zinc-200">
                <p className="pt-1 font-helvetica-bold text-base">
                  {msg.name.slice(0, 1).toUpperCase()}
                </p>
              </div>
            </div>

            {/* message */}
            <div className="w-full">
              <div className="flex items-center justify-between">
                <p className="font-helvetica-bold text-base md:text-lg">
                  {msg.name}
                </p>
                <p className="font-helvetica text-xs text-zinc-500 md:text-sm">
                  {format(msg.created_at as number)}
                </p>
              </div>
              <p className="font-helvetica text-sm md:text-base">
                {msg.message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

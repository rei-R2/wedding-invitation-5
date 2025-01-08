"use client";

import { useEffect, useState } from "react";
import { getComments } from "../../utils/firebase/service-firebase";

interface Comment {
  created_at: number;
  message: string;
  name: string;
}

export default function Comments() {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const getCommments = async () => {
      const comments = await getComments();

      if (comments.status === 200) {
        setComments(comments.data as Comment[]);
      }
    };
    getCommments();
  }, []);

  return (
    <div className="px-3 py-20">
      <p className="text-end font-helvetica-bold text-xl">Comments</p>
      <p className="text-end font-helvetica text-xs">
        Sampaikan ucapan untuk kedua mempelai.
      </p>

      <form action="" className="mt-10 flex items-end gap-x-2">
        <div className="w-full">
          <input
            type="text"
            placeholder="Nama"
            className="mb-3 w-full rounded-lg border border-zinc-300 px-4 py-2 text-sm"
          />
          <textarea
            placeholder="Pesan"
            className="h-36 w-full rounded-lg border border-zinc-300 px-4 py-2 text-sm"
          />
        </div>
        <button className="mb-2 rounded-lg bg-black p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-send-fill size-5 text-white"
            viewBox="0 0 16 16"
          >
            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
          </svg>
        </button>
      </form>

      <div className="mt-10">
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
              <p className="font-helvetica-bold text-base">{msg.name}</p>
              <p className="font-helvetica text-sm">{msg.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

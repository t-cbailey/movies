"use client";
import { useRouter } from "next/navigation";

export default function Back() {
  const router = useRouter();
  return (
    <button
      className="text-white s:ml-2 l:ml-0 my-4 block text-xs"
      onClick={() => router.back()}
    >
      &larr; Go Back
    </button>
  );
}

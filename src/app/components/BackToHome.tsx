import React from "react";
import Link from "next/link";

export default function BackToHome() {
  return (
    <Link href="/" className="text-white s:ml-2 l:ml-0 my-4 block text-xs">
      &larr; Back to home
    </Link>
  );
}

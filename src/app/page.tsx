import React from "react";
import "../../style.css";
import Trending from "./components/Trending";

export const revalidate = 86400;

export default async function Home() {
  return (
    <>
      <section>
        <h2 className="mt-24 text-2xl text-orange-200 font-bold">
          What to Watch
        </h2>

        <Trending />
      </section>
    </>
  );
}

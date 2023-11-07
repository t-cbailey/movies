import React from "react";
import "../../style.css";
import Trending from "./components/Trending";

export function generateMetadata() {
  return { title: "Information about Movies, Tv and People." };
}

export default async function Home() {
  return (
    <>
      <section className="text-white">
        <h2 className="mt-24 ml-2 text-2xl text-orange-200 font-bold">
          What to Watch
        </h2>

        <Trending />
      </section>
    </>
  );
}

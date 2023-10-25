import React from "react";
import "../../style.css";
import Trending from "./components/Trending";
export const revalidate = 86400;

export default async function Home() {
  return (
    <>
      <section>
        <Trending />
      </section>
    </>
  );
}

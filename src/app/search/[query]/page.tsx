import { getProgData } from "@/lib/getData";
import { link } from "fs";
import React from "react";
import { Prog } from "@/types";
import PosterCard from "@/app/components/PosterCard";

type Props = { params: { query: string } };

export default async function Search({ params: { query } }: Props) {
  const results: Prog[] = await getProgData(`/search/multi?query=${query}`);

  return (
    <>
      <h2 className="mt-24">results for {query} </h2>
      <ul>
        {results.map((result) => {
          return (
            <li>
              <PosterCard prog={result} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

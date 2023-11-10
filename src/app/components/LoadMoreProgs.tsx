"use client";
import React from "react";
import PosterCard from "./CarouselItems/PosterCard";
import { Movie, ProgType } from "@/types";

import LoadingSpinner from "./LoadingSpinner";

type Props = { genreId: number; genreName: string; type: ProgType };

export default function LoadMoreProgs({ genreId, genreName, type }: Props) {
  const [progs, setProgs] = React.useState<Movie[]>([]);
  const [page, setPage] = React.useState<number>(2);
  const [end, setEnd] = React.useState(false);

  const handleClick = () => {
    const fetchData = fetch(
      `/api/progData/?genreId=${genreId}&page=${page}&type=${type}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.length > 0) {
          setProgs(progs.concat(...data));
          setPage(page + 1);
        } else setEnd(true);
      })
      .catch(console.error);
  };

  return (
    <>
      <section>
        {page > 2 && (
          <h4 className=" my-6 text-2xl text-orange-300">{`More ${genreName} ${
            type === "tv" ? "Programmes" : "Movies"
          }...`}</h4>
        )}
        <ul className="flex flex-row flex-wrap justify-center">
          {progs.map((prog, i) => {
            return (
              <React.Fragment key={i}>
                <li className="m-2 hover:border-2 hover:transform hover:scale-110 s:max-w-[40%] m:max-w-posterCard">
                  <PosterCard prog={prog} />
                </li>
              </React.Fragment>
            );
          })}
        </ul>
        <div className="flex flex-col items-center justify-center">
          {end && <h5 className="text-xl m-4">No more items...</h5>}
          <button
            className="bg-gradient-to-r from-orange-800 to-orange-400 border-orange-200 border-2 text-2xl my-4 hover:border-white hover:text-black text-white rounded-md w-[60%] text-center"
            onClick={handleClick}
          >
            Load More
          </button>
        </div>
      </section>
    </>
  );
}

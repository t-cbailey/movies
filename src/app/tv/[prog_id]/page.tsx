import MoreDetailsTv from "@/app/components/Tv/MoreDetailsTv";
import TvCardLg from "@/app/components/Tv/TvCardLg";
import { getCastData, getTvData } from "@/lib/getData";
import { Credit, Tv } from "@/types";
import React from "react";

type Props = { params: { prog_id: string } };

export async function generateMetadata({ params: { prog_id } }: Props) {
  const progData = await getTvData(`tv/${prog_id}`, "tv");
  if (progData) {
    return { title: `${progData[0].name} ` };
  } else return { title: "Not Found" };
}

const revalidate = 86000;

export async function generateStaticParams() {
  const [discoverTv, trendingTv, popularTv]: Tv[][] = [
    await getTvData("discover/tv", "tv"),
    await getTvData("trending/tv/day", "tv"),
    await getTvData("tv/top_rated", "tv"),
  ];

  const allTv = [...discoverTv, ...trendingTv, ...popularTv];
  return allTv.map((prog) => {
    return { prog_id: prog.id.toString() };
  });
}

export default async function SingleProg({ params: { prog_id } }: Props) {
  const id = prog_id;

  const progData = await getTvData(`tv/${id}`, "tv");
  if (!progData) {
    return <p className="mt-24">Content for id:{id} Not Found</p>;
  }

  const prog: Tv = progData[0];
  const cast: Credit[] = await getCastData(`tv/${prog.id}/credits`, "person");

  const content = (
    <>
      <section className="mt-24 ml-4">
        <TvCardLg prog={prog} />
      </section>
      <section className="ml-4">
        <MoreDetailsTv prog={prog} cast={cast} />
      </section>
    </>
  );
  return content;
}

import { getCastData, getTvData } from "@/lib/getData";
import { Credit, Season } from "@/types";
import React from "react";
import SeasonCardLg from "@/app/components/Tv/SeasonCardLg";
import MoreDetailsSeason from "@/app/components/Tv/MoreDetailsSeason";
import Back from "@/app/components/Back";

type Props = {
  params: {
    season_id: string;
    prog_id: string;
  };
};

export async function generateMetadata({
  params: { season_id, prog_id },
}: Props) {
  const seasonData = await getTvData(`tv/${prog_id}/season/${season_id}`, "tv");
  const progData = await getTvData(`tv/${prog_id}`, "tv");

  if (seasonData && progData) {
    return { title: `${progData[0].name} ${seasonData[0].name}` };
  } else return { title: "Not Found" };
}

export default async function SingleSeason({
  params: { season_id, prog_id },
}: Props) {
  const id = season_id;

  const progData = await getTvData(`tv/${prog_id}/season/${season_id}`, "tv");
  if (!progData) {
    return <p className="">Content for id:{id} Not Found</p>;
  }

  const season: Season = progData[0];

  const cast: Credit[] = await getCastData(`tv/${prog_id}/credits`, "person");

  const content = (
    <>
      <Back />
      <section className=" ml-4">
        <SeasonCardLg season={season} />
      </section>
      <section className="m-4">
        <MoreDetailsSeason season={season} cast={cast} />
      </section>
    </>
  );
  return content;
}

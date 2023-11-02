import { getCastData, getTvData } from "@/lib/getData";
import { Credit, Season } from "@/types";
import React from "react";
import SeasonCardLg from "@/app/components/Tv/SeasonCardLg";
import MoreDetailsSeason from "@/app/components/Tv/MoreDetailsSeason";

type Props = {
  params: {
    season_id: string;
    prog_id: string;
  };
};

export function generateMetadata({ params: { season_id, prog_id } }: Props) {
  return { title: `Programme id: ${prog_id} season: ${season_id} ` };
}

export default async function SingleSeason({
  params: { season_id, prog_id },
}: Props) {
  const id = season_id;

  const progData = await getTvData(`tv/${prog_id}/season/${season_id}`, "tv");
  if (!progData) {
    return <p className="mt-24">Content for id:{id} Not Found</p>;
  }

  const season: Season = progData[0];

  const cast: Credit[] = await getCastData(`tv/${prog_id}/credits`, "person");

  const content = (
    <>
      <section className="mt-24">
        <SeasonCardLg season={season} />
      </section>
      <section>
        <MoreDetailsSeason season={season} cast={cast} />
      </section>
    </>
  );
  return content;
}

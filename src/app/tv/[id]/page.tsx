import React from "react";
import { getTvData, getCastData } from "@/lib/getData";
import { Credit, Tv } from "@/types";
import MoreDetailsTv from "@/app/components/Tv/MoreDetailsTV";
import TvDetails from "@/app/components/Tv/TvCardLg";
type Props = { params: { id: string } };

export default async function SingleProg({ params: { id } }: Props) {
  const progData = await getTvData(`tv/${id}`, "tv");
  if (!progData) {
    return <p className="mt-24">Content for id:{id} Not Found</p>;
  }
  const prog: Tv = progData[0];

  const creditsData = await getCastData(`tv/${prog.id}/credits`, "person");
  const cast: Credit[] = creditsData;

  const content = (
    <>
      <div className="mt-24 text white flex flex-row flex-wrap">
        <TvDetails prog={prog} />
      </div>
      <section>
        <MoreDetailsTv prog={prog} cast={cast} />
      </section>
    </>
  );
  return content;
}

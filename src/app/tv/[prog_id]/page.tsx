import MoreDetailsTv from "@/app/components/Tv/MoreDetailsTv";
import TvCardLg from "@/app/components/Tv/TvCardLg";
import { getCastData, getTvData } from "@/lib/getData";
import { Credit, Tv } from "@/types";
import React from "react";

type Props = { params: { prog_id: string } };

export default async function SingleProg({ params: { prog_id } }: Props) {
  const id = prog_id;

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
        <TvCardLg prog={prog} />
      </div>
      <section>
        <MoreDetailsTv prog={prog} cast={cast} />
      </section>
    </>
  );
  return content;
}

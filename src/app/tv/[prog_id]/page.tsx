import MoreDetailsTv from "@/app/components/Tv/MoreDetailsTv";
import TvCardLg from "@/app/components/Tv/TvCardLg";
import { getCastData, getTvData } from "@/lib/getData";
import { Credit, Tv } from "@/types";
import React from "react";

type Props = { params: { prog_id: string } };

export function generateMetadata({ params: { prog_id } }: Props) {
  return { title: `Programme with Id: ${prog_id} ` };
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
      <section className="mt-24 ">
        <TvCardLg prog={prog} />
      </section>
      <section>
        <MoreDetailsTv prog={prog} cast={cast} />
      </section>
    </>
  );
  return content;
}

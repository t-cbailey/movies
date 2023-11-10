import React from "react";
import { Credit } from "@/types";
import PersonIMG from "../PersonIMG";
import Link from "next/link";

type Props = { person: Credit; imgUrl: string };

export default function PersonCardSm({ person, imgUrl }: Props) {
  return (
    <>
      <Link href={`/person/${person.id}`}>
        <section className=" flex flex-row items-center mb-4 hover:bg-gray-900">
          <div className="rounded-full overflow-hidden h-[120px] w-[120px]">
            <PersonIMG person={person} />
          </div>

          <div className="ml-4">
            <h2 className="text-base">{person.name}</h2>
            <p className="text-orange-200 text-sm">{person.character}</p>
          </div>
        </section>
      </Link>
    </>
  );
}

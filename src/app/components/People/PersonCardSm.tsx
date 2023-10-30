import React from "react";
import { Credit, Person } from "@/types";
import generateImgUrl from "@/utils/images/generateImgUrl";
import Image from "next/image";
import Link from "next/link";

type Props = { person: Credit };

export default function PersonCardSm({ person }: Props) {
  const imgUrl = generateImgUrl(200, person.profile_path);
  return (
    <>
      <Link href={`/person/${person.id}`} className=" w-1/4 m-4">
        <section className=" flex flex-row items-center mb-4 hover:bg-gray-900">
          <Image
            src={imgUrl}
            width={100}
            height={200}
            alt={person.name}
            className="rounded-full"
          />
          <div className="ml-4">
            <h2 className="text-base">{person.name}</h2>
            <p className="text-orange-200 text-sm">{person.character}</p>
          </div>
        </section>
      </Link>
    </>
  );
}

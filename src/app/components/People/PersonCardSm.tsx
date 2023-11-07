import React from "react";
import { Credit } from "@/types";
import Image from "next/image";
import Link from "next/link";

type Props = { person: Credit; imgUrl: string };

export default function PersonCardSm({ person, imgUrl }: Props) {
  return (
    <>
      <Link href={`/person/${person.id}`}>
        <section className=" flex flex-row items-center mb-4 hover:bg-gray-900">
          <Image
            priority={true}
            src={imgUrl}
            width={100}
            height={150}
            alt={person.name}
            className="rounded-full "
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

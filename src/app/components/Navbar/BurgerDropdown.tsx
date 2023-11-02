"use client";
import React from "react";
import menuIcon from "../../../../public/icons8-hamburger-100.png";
import Image from "next/image";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import MainDropdown from "../SideBar/Dropdowns/MainDropdown";
import { Person } from "@/types";

type Props = { genres: any; trendingPeople: Person[] };

export default async function BurgerDropdown({
  genres,
  trendingPeople,
}: Props) {
  return (
    <Dropdown className="bg-slate-800">
      <DropdownTrigger>
        <Button className="bg-black text-white w-4 p-0">
          <Image className="w-4" src={menuIcon} alt="menu" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu closeOnSelect={false} aria-label="Static Actions">
        <DropdownItem closeOnSelect={true} key="new">
          <MainDropdown genres={genres} trendingPeople={trendingPeople} />
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

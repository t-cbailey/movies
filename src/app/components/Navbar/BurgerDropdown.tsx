"use client";
import React from "react";
import menuIcon from "../../../../public/icons8-hamburger-100.png";
import Image from "next/image";
import MainDropdown from "../SideBar/Dropdowns/MainDropdown";
import { Person } from "@/types";

type Props = { genres: any; trendingPeople: Person[] };

export default function BurgerDropdown({ genres, trendingPeople }: Props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className=" fixed top-4 right-4 l:hidden">
        <div className="relative ">
          <button
            type="button"
            className="bg-black text-white w-6 p-0"
            onClick={toggleDropdown}
          >
            {isOpen ? "X" : <Image className="w-6" src={menuIcon} alt="menu" />}
          </button>

          {isOpen && (
            <div className=" origin-top-right h-screen absolute -right-4  mt-4 w-screen  bg-black opacity-90 overflow-scroll pb-10">
              <ul
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <li>
                  <div className="block px-4 py-2 " onClick={closeDropdown}>
                    <MainDropdown
                      genres={genres}
                      trendingPeople={trendingPeople}
                    />
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

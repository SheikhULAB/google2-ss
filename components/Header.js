import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { XIcon, MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

const Header = () => {
  const router = useRouter();
  const searchInputRef = useRef();

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          height={40}
          width={120}
          onClick={() => router.push("/")}
          className="
        cursor-pointer"
        />

        <form
          className="flex border border-gray-200 rounded-full
      shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5 flex-grow"
        >
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow
        w-full focus:outline-none
        "
          />
          <XIcon
            className="h-7 text-gray-500 cursor-pointer transition
        duration-100 transform hover:scale-125 sm:mr-3"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon
            className="h-6 mr-3 hidden sm:inline-flex text-blue-500
        border-l-2 pl-4 border-gray-300"
          />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>

        <Avatar url="https://coaching.papareact.com/ai9" className="ml-auto" />
      </div>

      <HeaderOptions />
    </header>
  );
};

export default Header;

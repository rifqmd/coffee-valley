import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

type PropTypes = {
  lists: Array<{
    title: string;
    url: string;
  }>;
};

const Navbar = (props: PropTypes) => {
  const { data } = useSession();
  const { lists } = props;
  const { pathname } = useRouter();

  return (
    <>
      {/* logo */}
      <div className="flex items-center justify-start">
        <Image
          src="/coffe-logo.jpg"
          alt="Logo"
          width="192"
          height="192"
          quality="95"
          className="w-36 h-36"
        />
        <div className="text-sm items-center text-center -ml-4">
          <h1 className="italic text-amber-800">Coffee Valley</h1>
          <p className="italic text-amber-800">Taste the love in every cup!</p>
          <p className="text-[12px]">One Alewife Center 3rd Floor</p>
          <p className="text-[12px]">Cambridge, MA 02140</p>
        </div>
      </div>

      {/* navigation */}
      <div className="flex h-14 items-center justify-end text-white bg-orange-900 mx-5">
        <div className="flex flex-row gap-2">
          {lists.map((list, index) => (
            <Link
              key={list.title}
              href={list.url}
              className={`flex items-center gap-1 px-4 py-2 text-lg duration-300 hover:bg-white hover:text-black hover:ease-in-out ${
                pathname === list.url ? "bg-blue-500" : ""
              }`}
            >
              <h2 className="text-md">{list.title}</h2>
            </Link>
          ))}
        </div>
        <button
          className="mr-5 border-none bg-white px-2 py-1 text-black"
          onClick={() => (data ? signOut() : signIn())}
        >
          {data ? "Logout" : "Login"}
        </button>
      </div>
    </>
  );
};

export default Navbar;

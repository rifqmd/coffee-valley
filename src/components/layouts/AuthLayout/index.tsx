import Image from "next/image";
import Link from "next/link";
import React from "react";

type propTypes = {
  error?: string;
  title?: string;
  children: React.ReactNode;
  link: string;
  linkText?: string;
};

const AuthLayout = (props: propTypes) => {
  const { error, title, children, link, linkText } = props;

  return (
    <div className="mb-5 flex h-screen w-screen flex-col items-center justify-center text-lg">
      {/* <h1 className="mb-5 text-3xl">{title}</h1> */}
      <Image
        src="/coffe-logo.jpg"
        alt="Logo"
        width="192"
        height="192"
        quality="95"
        className="object-cover w-60 h-60 -mb-11"
      />
      <div className="mb-5 items-center text-center">
        <h1 className="italic">Coffee Valley</h1>
        <p>Taste the love in every cup!</p>
        <p className="text-sm">One Alewife Center 3rd Floor</p>
        <p className="text-sm">Cambridge, MA 02140</p>
      </div>
      {error && <div className="mb-5 text-red-500">{error}</div>}
      <div className="mb-3 w-2/6 p-5 shadow-md shadow-slate-500/50">
        {children}
      </div>
      <p className="text-sm">
        {linkText}{" "}
        <Link href={link} className="text-blue-500">
          here
        </Link>
      </p>
    </div>
  );
};

export default AuthLayout;

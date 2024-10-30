// import { Inter } from "next/font/google";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data } = useSession();

  return (
    <>
      <p>
        <Link href="/admin" className="text-blue-500">
          Dashboard Page
        </Link>
      </p>

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
    </>
  );
}

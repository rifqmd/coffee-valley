// import { Inter } from "next/font/google";
import { useSession } from "next-auth/react";
import Link from "next/link";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data } = useSession();

  return (
    <>
      <p>{data?.user?.email}</p>
    </>
  );
}

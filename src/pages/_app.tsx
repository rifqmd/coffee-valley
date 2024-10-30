import Navbar from "@/components/fragments/Navbar";
import Toaster from "@/components/ui/Toaster";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { Plus_Jakarta_Sans } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const lato = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
});

const disableNavbar = ["auth", "admin"];

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const { pathname } = useRouter();
  const [toaster, setToaster] = useState<any>({});

  // timer toaster
  useEffect(() => {
    if (Object.keys(toaster).length > 0) {
      setTimeout(() => {
        setToaster({});
      }, 3000);
    }
  });

  return (
    <SessionProvider session={session}>
      <div className={lato.className}>
        {!disableNavbar.includes(pathname.split("/")[1]) && (
          <Navbar lists={[]} />
        )}
        <Component {...pageProps} setToaster={setToaster} />

        {/* checker toaster */}
        {Object.keys(toaster).length > 0 && (
          <Toaster
            variant={toaster.variant}
            message={toaster.message}
            setToaster={setToaster}
          />
        )}
      </div>
    </SessionProvider>
  );
}

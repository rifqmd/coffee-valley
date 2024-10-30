import Footer from "@/components/fragments/Footer";
import Navbar from "@/components/fragments/Navbar";
import Head from "next/head";

type PropTypes = {
  children: React.ReactNode;
  pageTitle: string;
};

const listNavbarItem = [
  {
    title: "Dashboard",
    url: "/admin",
  },
  {
    title: "Catalog",
    url: "/admin/catalog",
  },
  {
    title: "Order Status",
    url: "/admin/order-status",
  },
  {
    title: "Distributors",
    url: "/admin/distributor",
  },
  {
    title: "Upload",
    url: "/admin/upload",
  },
];

const AdminLayout = (props: PropTypes) => {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>{pageTitle} - Coffee Valley</title>
        <meta
          name="description"
          content="Coffee Valley - One Alewife Center 3rd Floor"
        />
      </Head>
      <div className="flex">
        <Navbar lists={listNavbarItem} />
        <div className="w-full px-14 py-10">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default AdminLayout;

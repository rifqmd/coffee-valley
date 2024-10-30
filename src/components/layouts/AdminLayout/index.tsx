import Sidebar from "@/components/fragments/Sidebar";
import Head from "next/head";

type PropTypes = {
  children: React.ReactNode;
  pageTitle: string;
};

const listSidebarItem = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: "bxs-dashboard",
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
        <Sidebar lists={listSidebarItem} />
        <div className="w-full px-14 py-10">{children}</div>
      </div>
    </>
  );
};

export default AdminLayout;

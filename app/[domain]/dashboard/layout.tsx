import { Metadata } from "next";

import { ParamsProps } from "@types";

import capitalizeFirstLetter from "@lib/utils";

import { LeftSideBar, MainContent } from "@components/shared/dashboard/layout";

export async function generateMetadata({
  params,
}: ParamsProps): Promise<Metadata> {
  // read route params
  const { domain } = params;

  return {
    title: capitalizeFirstLetter(domain) + " • Dashboard",
  };
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-1 flex-row">
      <LeftSideBar />
      <MainContent>{children}</MainContent>
    </div>
  );
};

export default Layout;

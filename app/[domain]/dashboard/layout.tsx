import { LeftSideBar, MainContent } from "@components/shared/dashboard/layout";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-1 flex-row">
      <LeftSideBar />
      <MainContent>{children}</MainContent>
    </div>
  );
};

export default Layout;

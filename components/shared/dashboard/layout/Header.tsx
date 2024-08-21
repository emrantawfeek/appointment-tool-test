// import GlobalSearch from "@components/shared/search/GlobalSearch";
import BreadcrumbRoute from "@components/shared/BreadcrumbRoute";
import LoggedInUser from "@components/shared/LoggdeInUser";

const Header = () => {
  return (
    <header className="sticky flex min-h-5 items-center justify-between gap-4 px-6 py-4">
      <BreadcrumbRoute initialRoute="" />
      <div className="flex flex-row gap-6">
        {/* <GlobalSearch className="w-full md:w-[200px] lg:w-[336px]" /> */}
        <LoggedInUser />
      </div>
    </header>
  );
};

export default Header;

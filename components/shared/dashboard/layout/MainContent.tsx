import { cn } from "@lib/utils";

import { Header } from "@components/shared/dashboard/layout";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const MainContent = ({ children, className }: Props) => {
  return (
    <main
      className={cn(
        "scrollbar h-screen flex-grow overflow-y-auto bg-muted/40",
        className,
      )}
      vaul-drawer-wrapper=""
    >
      <Header />
      <div className="m-6 mt-0">{children}</div>
    </main>
  );
};

export default MainContent;

import { BsHouses } from "react-icons/bs";
import { LuGrip, LuHome, LuPenSquare, LuUsers2 } from "react-icons/lu";

export const navItems = [
  {
    href: "/",
    name: "Home",
    icon: LuHome,
  },
  {
    href: "/user",
    name: "Users",
    icon: LuUsers2,
  },
  {
    href: "/place",
    name: "Places",
    icon: BsHouses,
  },
  {
    href: "/groups",
    name: "Groups",
    icon: LuGrip,
  },
  {
    href: "/posts",
    name: "Posts",
    icon: LuPenSquare,
  },
];

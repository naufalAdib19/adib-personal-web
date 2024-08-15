import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/experience",
    name: "Experience",
  },
  {
    path: "/work",
    name: "Work",
  },
];

const Hamburger = () => {
  const path = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="flex flex-col gap-y-[0.3rem] items-end">
          <div className="bg-accent w-[30px] h-[2.5px]"></div>
          <div className="bg-accent w-[17px] h-[2.5px]"></div>
          <div className="bg-accent w-[22px] h-[2.5px]"></div>
        </button>
      </SheetTrigger>
      <SheetContent className="bg-primary text-accent">
        <SheetHeader hidden={true}>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="mt-32 mb-36 text-center text-white text-5xl font-semibold">
          <h1>Adib.</h1>
        </div>
        <ul className="text-center">
          {links.map((link, index) => {
            return (
              <li className="mb-10 text-white" key={index}>
                <Link
                  href={link.path}
                  className={`${
                    link.path === path &&
                    "text-accent border-b-2 border-accent py-1"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default Hamburger;

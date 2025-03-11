"use client";

import Link from "next/link";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu, Square } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { usePathname } from "next/navigation";
import { NAVIGATION } from "@/config";
import { cn } from "@/lib/utils";
import { ContactForm } from "./contact-form";
import { MyCommandDialog } from "./my-command-dialog";
import { Icons } from "./icons";

export default function Navbar()
{
  const pathname = usePathname();

  return (
    <div className="fixed top-0 w-screen z-50">
      <header className="container flex py-4 items-center gap-4">
        <nav className="hidden flex-col md:flex md:flex-row md:items-center md:justify-between w-full h-full ">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Icons.logo className="h-16 w-16" />
            {/* <p>Lobon</p> */}
          </Link>
          <div className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:justify-between md:gap-5 md:text-sm lg:gap-6">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[#1D3200] text-[18px] font-semibold"
                  // pathname === item.href
                  //   ? "text-foreground"
                  //   : "text-muted-foreground"
                )}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:justify-between md:gap-5 md:text-sm lg:gap-6">
            {/* <ContactForm>
            <p
              role="button"
              className="text-muted-foreground hover:text-foreground"
            >
              Contact
            </p>
          </ContactForm> */}
            <div className="flex gap-1">
              <Link href='/wishlist'>
                <Button className=" bg-[#1D3200] hover:text-[#1d3200] text-[#C8FF7D] hover:bg-[#C8FF7D] transition-all duration-300 ease-linear hover:scale-110">Wishlist</Button>
              </Link>
            </div>
          </div>
        </nav>
        <Sheet>
          <div className="w-full flex md:hidden justify-between">
            <Link
              href="#"
              className="flex items-center gap-2 font-semibold w-fit"
            >
              {/* <Square className="size-5 fill-foreground" /> */}
              <Icons.logo className="h-12 w-12" />
              {/* <p>Lobon</p> */}
            </Link>
            <div>
              {/* <ModeToggle />
              <MyCommandDialog /> */}
              <SheetTrigger className="ml-2" asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
            </div>
          </div>
          <SheetContent side="right" className="bg-[#EDF4E3]">
            <nav className="grid gap-6 text-lg font-medium  bg-[#EDF4E3]">
              {NAVIGATION.map((item) => (
                <SheetClose asChild key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "hover:text-foreground text-[18px]",
                      pathname === item.href
                        ? "text-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.title}
                  </Link>
                </SheetClose>
              ))}
              {/* <ContactForm>
                <p
                  role="button"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Contact
                </p>
              </ContactForm> */}
            </nav>
          </SheetContent>
        </Sheet>
      </header>
    </div>
  );
}

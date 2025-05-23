"use client";

import { NAVIGATION } from "@/config";
import { cn } from "@/lib/utils";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Icons } from "./icons";
import { Button } from "./ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";

export default function Navbar()
{
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll direction and position
  useMotionValueEvent(scrollY, "change", (latest) =>
  {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 50) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setIsScrolled(latest > 100);
  });

  const variants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    hidden: {
      y: -100,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className={cn(
        "fixed top-0 transition-all w-screen z-[999999] duration-300",
        isScrolled ? "bg-[#EDF4E3] shadow" : "bg-transparent"
      )}
      variants={variants}
      initial="visible"
      animate={isVisible ? "visible" : "hidden"}
    >
      <header className={cn("container flex py-2 items-center gap-4")}>
        <nav className="hidden flex-col md:flex md:flex-row md:items-center md:justify-between w-full h-full">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Icons.logo className="h-auto w-12" />
          </Link>
          <div className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:justify-between md:gap-5 md:text-sm lg:gap-6">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[#1D3200] text-[18px] font-semibold relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-[#1D3200] after:scale-x-0 hover:after:scale-x-100 after:transition-all transition-all after:duration-300 after:ease-in-out duration-300 ease-in-out",
                )}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:justify-between md:gap-5 md:text-sm lg:gap-6">
            <div className="flex gap-1">
              <Link href="/join-us">
                <Button
                  className="bg-[#1D3200] hover:text-[#1d3200] text-[#C8FF7D] hover:bg-[#C8FF7D] transition-all duration-300 ease-linear hover:scale-110"
                >
                  জয়েন করুন
                </Button>
              </Link>
            </div>
          </div>
        </nav>
        <Sheet>
          <div className="w-full flex md:hidden justify-between items-center">
            <Link
              href="/"
              className="flex items-center gap-2 font-semibold w-fit"
            >
              <Icons.logo className="h-auto w-8" />
            </Link>
            <div className="flex items-center gap-2">
              {/* <Link href="/join-us" className="w-full">
                <Button
                  className="bg-[#1D3200] hover:text-[#1d3200] text-[#C8FF7D] hover:bg-[#C8FF7D] transition-all duration-300 ease-linear w-full"
                >
                  জয়েন করুন
                </Button>
              </Link> */}
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
          <SheetContent closeButtonClassName="text-[#EDF4E3] bg-black ring-0 focus:ring-0 p-1" side="right" className="bg-[#EDF4E3] py-14 z-[999999] flex flex-col gap-8">
            <nav className="grid gap-6 text-lg font-medium bg-[#EDF4E3]">
              {NAVIGATION.map((item) => (
                <SheetClose asChild key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "hover:text-[#1D3200] text-xl text-[#1D3200]",
                      pathname === item.href
                        ? "text-[#1D3200]"
                        : "text-[#1d3200a8]"
                    )}
                  >
                    {item.title}
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <Link href="/join-us" className="w-full">
              <Button
                className="bg-[#1D3200] hover:text-[#1d3200] text-[#C8FF7D] hover:bg-[#C8FF7D] transition-all duration-300 ease-linear w-full"
              >
                জয়েন করুন
              </Button>
            </Link>
          </SheetContent>
        </Sheet>
      </header>
    </motion.div>
  );
}
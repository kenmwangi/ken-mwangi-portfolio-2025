"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Header() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 0);

      // Show/hide based on scroll direction
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* <div className="h-12 bg-[#F7F3FF]">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-center px-6 lg:px-8">
          <p className="text-sm text-neutral-600">
            Introducing Arcjet – Read the{" "}
            <Link
              href="#"
              className="font-medium text-neutral-950 hover:underline"
            >
              launch post
            </Link>
          </p>
        </div>
      </div> */}
      <header
        className={`sticky-nav  ${
          isVisible ? "sticky-nav-visible" : "sticky-nav-hidden"
        }`}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 text-sm font-medium">
              Ken Mwangi
            </Link>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <Link href="/docs" className="nav-link">
              Links
            </Link>
            <Link href="/blog" className="nav-link">
              Blog
            </Link>
            <Link href="/changelog" className="nav-link">
              Technical
            </Link>
            <Link href="/pricing" className="nav-link">
              Projects
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end gap-x-8">
            <Link
              href="/login"
              className="hidden lg:block lg:text-sm lg:text-neutral-600 lg:hover:text-neutral-950"
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center gap-x-2 rounded-lg bg-neutral-950 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-neutral-800"
            >
              <span>Get started</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}

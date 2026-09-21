"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/resume";
import s from "@/components/portfolio/editorial.module.css";

const pages = [
  { href: "/work", label: "My Work" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export function EditorialHeader() {
  const pathname = usePathname();

  return (
    <header className={s.header}>
      <Link href="/" className={s.wordmark} aria-label="Boyu Liu, home">
        Boyu Liu<span>✳</span>
      </Link>
      <nav className={s.nav} aria-label="Portfolio navigation">
        {pages.map((page) => (
          <Link key={page.href} href={page.href} aria-current={pathname === page.href ? "page" : undefined}>
            {page.label}
          </Link>
        ))}
      </nav>
      <a className={s.headerContact} href={`mailto:${profile.email}`}>
        Let’s talk <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </header>
  );
}

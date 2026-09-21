"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/app/demos/demos.module.css";

const variants = [
  { slug: "editorial", href: "/", label: "01 Editorial", short: "正式网站 · 编辑极简" },
  { slug: "studio", href: "/demos/studio", label: "02 Studio", short: "产品工程" },
  { slug: "research", href: "/demos/research", label: "03 Research", short: "学术研究" },
];

export function DemoSwitcher() {
  const path = usePathname();
  const isEditorialPage = ["/", "/work", "/about", "/blog"].some(
    (route) => path === route || (route !== "/" && path.startsWith(`${route}/`)),
  );
  return (
    <nav className={styles.switcher} aria-label="Design demo navigation">
      <Link href="/demos" className={styles.switcherHome} aria-label="Compare all three designs">
        <span className={styles.switcherMark} aria-hidden="true">B.</span>
        <span>Design concepts</span>
      </Link>
      <div className={styles.switcherTabs}>
        {variants.map((variant) => (
          <Link
            key={variant.slug}
            href={variant.href}
            aria-current={(variant.slug === "editorial" && isEditorialPage) || path === `/demos/${variant.slug}` || path.startsWith(`/demos/${variant.slug}/`) ? "page" : undefined}
            title={variant.short}
          >
            {variant.label}
          </Link>
        ))}
      </div>
      <Link href="/" className={styles.original}>Home ↗</Link>
    </nav>
  );
}

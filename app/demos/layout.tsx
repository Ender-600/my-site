import type { Metadata } from "next";
import { DemoSwitcher } from "@/components/demos/demo-switcher";
import styles from "./demos.module.css";

export const metadata: Metadata = {
  title: { default: "Boyu Liu — Portfolio concepts", template: "%s · Boyu Liu" },
  description: "Three portfolio design concepts, with Boyu Liu’s September 2026 experience, projects, and research.",
  robots: { index: false, follow: false },
};

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.shell} lang="en">
      <DemoSwitcher />
      {children}
    </div>
  );
}

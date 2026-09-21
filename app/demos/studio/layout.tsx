import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio portfolio",
  description: "Boyu Liu’s work in AI agents, dependable infrastructure, and product engineering.",
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return children;
}

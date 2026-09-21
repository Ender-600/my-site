import { permanentRedirect } from "next/navigation";

export default function LegacyRedirect() {
  permanentRedirect("/work#editorial-research");
}

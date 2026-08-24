import type { Metadata } from "next";

import { MediaView } from "@/modules/media";
import { Footer, Navbar } from "@/shared/components/layout";

export const metadata: Metadata = {
  title: "Media | Rapid",
  description: "Explore our latest media, photos, and press releases.",
};

export default function MediaPage() {
  return (
    <div className="relative w-full overflow-x-hidden font-poppins">
      <Navbar />
      <div className="section-background">
        <MediaView />
      </div>
      <Footer />
    </div>
  );
}

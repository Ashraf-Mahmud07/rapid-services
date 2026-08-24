import img1 from "../assets/images/1.png";
import img2 from "../assets/images/2.png";
import img3 from "../assets/images/3.png";
import img4 from "../assets/images/4.png";
import img5 from "../assets/images/5.png";
import img6 from "../assets/images/6.png";
import img7 from "../assets/images/7.png";
import img8 from "../assets/images/8.png";
import img9 from "../assets/images/9.png";
import img10 from "@/modules/service/assets/plast-internal.jpg";
import img11 from "@/modules/service/assets/elec-conduit.jpg";
import img12 from "@/modules/service/assets/tiling-ceramic.jpg";
import img13 from "@/modules/service/assets/clean-industrial.jpg";
import img14 from "@/modules/service/assets/paint-anti-carbonation.jpg";
import img15 from "@/modules/service/assets/plumb-water.jpg";
import img16 from "@/modules/service/assets/combo-roof.jpg";
import img17 from "@/modules/service/assets/elec-testing.jpg";
import img18 from "@/modules/service/assets/plast-external.jpg";
import img19 from "@/modules/service/assets/ceil-acoustic.jpg";
import img20 from "@/modules/service/assets/paint-surface.jpg";

export const MEDIA_IMAGES = [
  { id: 1, src: img1.src, alt: "Media Image 1" },
  { id: 2, src: img2.src, alt: "Media Image 2" },
  { id: 3, src: img3.src, alt: "Media Image 3" },
  { id: 4, src: img4.src, alt: "Media Image 4" },
  { id: 5, src: img5.src, alt: "Media Image 5" },
  { id: 6, src: img6.src, alt: "Media Image 6" },
  { id: 7, src: img7.src, alt: "Media Image 7" },
  { id: 8, src: img8.src, alt: "Media Image 8" },
  { id: 9, src: img9.src, alt: "Media Image 9" },
  { id: 10, src: img10.src, alt: "Media Image 10" },
  { id: 11, src: img11.src, alt: "Media Image 11" },
  { id: 12, src: img12.src, alt: "Media Image 12" },
  { id: 13, src: img13.src, alt: "Media Image 13" },
  { id: 14, src: img14.src, alt: "Media Image 14" },
  { id: 15, src: img15.src, alt: "Media Image 15" },
  { id: 16, src: img16.src, alt: "Media Image 16" },
  { id: 17, src: img17.src, alt: "Media Image 17" },
  { id: 18, src: img18.src, alt: "Media Image 18" },
  { id: 19, src: img19.src, alt: "Media Image 19" },
  { id: 20, src: img20.src, alt: "Media Image 20" },
];

export const MEDIA_VIDEOS = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  type: "video" as const,
  sources: [
    {
      src: `/assets/media-video/${i + 1}.mp4`,
      type: "video/mp4",
    },
  ],
}));

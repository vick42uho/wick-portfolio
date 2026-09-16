import type { Metadata } from "next";
import { PresentationDeck } from "./presentation-deck";

export const metadata: Metadata = {
  title: "Live Presentation — Full-Stack Software Engineering (AI-Focused)",
  description: "สไลด์นำเสนอผลงานและสถาปัตยกรรมระบบโรงพยาบาลระดับ Production โดย ทวีป โปราหา (วิค) สำหรับสัมภาษณ์งานโรงพยาบาลจักษุ รัตนิน",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PresentationPage() {
  return <PresentationDeck />;
}

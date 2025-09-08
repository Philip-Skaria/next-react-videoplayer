import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import {VideoCard} from "../components/VideoCard";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <VideoCard
      thumbnail={"thumbnail.png"}
      title={"random youtube video"}
      channel={"channel.png"}
      author={"Philip Skaria"}
      views={"200k"}
      timestamp={"3 days ago"}    
      ></VideoCard>
    </div>
  );
}

import { Faq } from "../components/sections/Faq";
import { Hero } from "../components/sections/Hero";
import { LineUp } from "../components/sections/LineUp";
import { MarqueeBanner } from "../components/sections/MarqueeBanner";
import { Playlist } from "../components/sections/Playlist";
import { ProjetosHope } from "../components/sections/ProjetosHope";
import { VideoSobre } from "../components/sections/VideoSobre"; 

export function Home() {
  return (
    <>npm
      <Hero />
      <MarqueeBanner />
      <VideoSobre />
      <LineUp />
      <Playlist />
      <ProjetosHope />
      <Faq />  
    </>
  );
}
"use client";
import { useRefs } from "@/context/RefsContext";
import Hero from "./Hero";
import BuyLand from "./BuyLand";
import NFTLands from "./NFTLands";
import VirtualWorld from "./VirtualWorld";
import GloomhavenToken from "./GloomhavenToken";
import WastelandToken from "./WastelandToken";

export default function MainPage() {
  const refs = useRefs();

  return (
    <div className="main-wrapper w-full min-w-full">
      <div ref={refs.myAccount} className="hero-section"><Hero /></div>
      <div ref={refs.documentation} className="buy-land-section"><BuyLand /></div>
      <div ref={refs.discover} className="buy-land-section"><NFTLands /></div>
      <div ref={refs.newWorld} className="buy-land-section"><GloomhavenToken /></div>
      <div ref={refs.community} className="buy-land-section"><WastelandToken /></div>
      <div ref={refs.community} className="buy-land-section"><VirtualWorld /></div>
    </div>
  );
}

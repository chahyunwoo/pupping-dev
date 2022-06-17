import { useState, useEffect, useCallback } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import Benefits from "./index-sections/Benefits";
import Characters from "./index-sections/Characters";
import FAQ from "./index-sections/FAQ";
import Main from "./index-sections/Main";
import NFT from "./index-sections/NFT";
import Remaining from "./index-sections/Remaining";
import Roadmap from "./index-sections/Roadmap";
import Story from "./index-sections/Story";

import mainBg from "../assets/images/index-sections/main-bg.jpg";
import nftBg from "../assets/images/index-sections/nft-bg.jpg";

import {
  EffectType,
  TransitionType,
  getOffsetByElementId,
  getScrollTransition,
  AppearStyle,
  Transition,
  ToStyle,
  EffectTypeIsIn,
} from "../libs/scrollAction";

const BackgroundImage = {
  MAIN: "main-background",
  NFT: "nft-background",
};

function Index() {
  const [bg, setBg] = useState(BackgroundImage.MAIN);
  const [onSection, setOnSection] = useState(EffectType.None);

  const checkOnSection = useCallback(
    (offset) => {
      Transition(
        getScrollTransition(offset.top, offset.bottom),
        onSection,
        setOnSection
      );
    },
    [onSection]
  );

  useEffect(() => {
    const offset = getOffsetByElementId("nft");

    checkOnSection(offset);
    const listener = () => {
      checkOnSection(offset);
    };
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, [checkOnSection]);

  useEffect(() => {
    if (EffectTypeIsIn(onSection)) setBg(BackgroundImage.NFT);
    else setBg(BackgroundImage.MAIN);
  }, [onSection]);

  return (
    <>
      <figure className="main-bg" id="bg">
        <div className={`bg ${bg}`}></div>
        <div className="bg-dark"></div>
      </figure>
      <Header />

      <Main />
      <NFT />
      <Story />
      <Characters />
      <Remaining />
      <Benefits />
      <Roadmap />
      <FAQ />

      <Footer />
    </>
  );
}

export default Index;

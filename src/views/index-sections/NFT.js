import Layout from "../../components/Layout";

import { useEffect, useState, useCallback } from "react";

import {
  EffectType,
  TransitionType,
  getOffsetByElementId,
  getScrollTransition,
  AppearStyle,
  Transition,
  ToStyle,
  EffectTypeIsIn,
} from "../../libs/scrollAction";

function NFT() {
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

  return (
    <Layout id="nft" name="nft">
      <div className={`contWrap${AppearStyle(onSection)}`}>
        <h2 className="title">Pupping with the dogs</h2>
        <h3 className="desc">
          The pupping project, which started in Canada, is the first NFT project
          connecting dogs and the metaverse. The initial 1,000 NFTs are
          exclusively provided to early-bird members and they will receive
          various benefits.
        </h3>
      </div>
    </Layout>
  );
}

export default NFT;

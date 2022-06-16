import { NavLink } from "react-router-dom";

import { forwardRef, useImperativeHandle, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const MoMenu = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      open: () => setOpen(true),
      close: () => setOpen(false),
    };
  });

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="menuBox"
          initial={{ x: 420, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { bounce: 0, type: "spring" },
          }}
          exit={{ x: 420, opacity: 0 }}
          onClick={() => {
            setOpen((prev) => !prev);
            props.setToggle((prev) => !prev);
          }}
        >
          <nav className="headerNavMo">
            <NavLink to="#nft">Pupping NFT</NavLink>
            <NavLink to="#story">Story</NavLink>
            <NavLink to="#characters">Characters</NavLink>
            <NavLink to="#remaining">Remaining</NavLink>
            <NavLink to="#benefits">Benefits</NavLink>
            <NavLink to="#roadmap">Roadmap</NavLink>
            <NavLink to="#faq">FAQ</NavLink>
          </nav>

          <ul className="snsMo">
            <a
              href="https://www.instagram.com/pupping_official/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://twitter.com/Puppingnft" target="_blank">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

export default MoMenu;

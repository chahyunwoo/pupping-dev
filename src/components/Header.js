import { useRef, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import MoMenu from "./MoMenu";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import logo from "../assets/images/logo.svg";

function Header() {
  const [toggle, setToggle] = useState(false);

  const moMenu = useRef(null);

  const clickedToggle = () => {
    setToggle((prev) => !prev);
  };

  useEffect(() => {
    toggle ? moMenu.current.open() : moMenu.current.close();
  }, [toggle]);

  return (
    <>
      <header>
        <MoMenu ref={moMenu} setToggle={setToggle} />
        <div className="container">
          <Link to="/index" className="logo">
            <img src={logo} alt="pupping" />
          </Link>

          <button
            type="button"
            className={`navMo${toggle ? " on" : ""}`}
            onClick={clickedToggle}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className="headerNav">
            <NavLink to="#nft">Pupping NFT</NavLink>
            <NavLink to="#story">Story</NavLink>
            <NavLink to="#characters">Characters</NavLink>
            <NavLink to="#remaining">Remaining</NavLink>
            <NavLink to="#benefits">Benefits</NavLink>
            <NavLink to="#roadmap">Roadmap</NavLink>
            <NavLink to="#faq">FAQ</NavLink>
          </nav>

          <ul className="sns">
            <NavLink
              to="https://www.instagram.com/pupping_official/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </NavLink>
            <NavLink to="https://twitter.com/Puppingnft" target="_blank">
              <FontAwesomeIcon icon={faTwitter} />
            </NavLink>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;

import Marquee from "react-easy-marquee";

import Layout from "../../components/Layout";

import mainLogo from "../../assets/images/index-sections/main-logo.svg";
import mainLogoMo from "../../assets/images/index-sections/main-logo-mobile.svg";
import dog1 from "../../assets/images/index-sections/main-dogs-02.png";
import dog2 from "../../assets/images/index-sections/main-dogs-05.png";
import dog3 from "../../assets/images/index-sections/main-dogs-06.png";
import dog4 from "../../assets/images/index-sections/main-dogs-03.png";
import dog5 from "../../assets/images/index-sections/main-dogs-04.png";
import dog6 from "../../assets/images/index-sections/main-dogs-01.png";
import dog7 from "../../assets/images/index-sections/main-dogs-07.png";
import dog8 from "../../assets/images/index-sections/main-dogs-09.png";
import dog9 from "../../assets/images/index-sections/main-dogs-08.png";
import dog10 from "../../assets/images/index-sections/main-dogs-10.png";

function Main() {
  const images = [dog1, dog2, dog3, dog4, dog5, dog6, dog7, dog8, dog9, dog10];

  return (
    <Layout name="main">
      <div className="main-bg"></div>
      <div className="main-content">
        <div className="contWrap">
          <h2 className="title">
            <img src={mainLogo} alt="pupping" className="logoImg" />
            <img src={mainLogoMo} alt="pupping" className="logoImgMo" />
          </h2>
          <h3 className="desc">Protect Home-Seeking dogs with Pupping NFTs</h3>
        </div>
        <ul className="mainContDog">
          <li>
            <img src={dog1} alt="dog" />
          </li>
          <li>
            <img src={dog2} alt="dog" />
          </li>
          <li>
            <img src={dog3} alt="dog" />
          </li>
          <li>
            <img src={dog4} alt="dog" />
          </li>
          <li>
            <img src={dog5} alt="dog" />
          </li>
          <li>
            <img src={dog6} alt="dog" />
          </li>
          <li>
            <img src={dog7} alt="dog" />
          </li>
          <li>
            <img src={dog8} alt="dog" />
          </li>
          <li>
            <img src={dog9} alt="dog" />
          </li>
          <li>
            <img src={dog10} alt="dog" />
          </li>
        </ul>

        <ul className="mainContDogMo">
          <Marquee duration={15000} background='transparent' height='190px'>
            {images.map((image) => (
              <img src={image} alt='dog' />
            ))}
          </Marquee>
        </ul>
      </div>
    </Layout>
  );
}

export default Main;

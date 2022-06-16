import Header from "../components/Header"
import Footer from "../components/Footer"

import Benefits from "./index-sections/Benefits"
import Characters from "./index-sections/Characters"
import FAQ from "./index-sections/FAQ"
import Main from "./index-sections/Main"
import NFT from "./index-sections/NFT"
import Remaining from "./index-sections/Remaining"
import Roadmap from "./index-sections/Roadmap"
import Story from "./index-sections/Story"

function Index() {
  return (
    <>
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
  )
}

export default Index

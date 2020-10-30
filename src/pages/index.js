import React from "react"

import "../styles.css"

import SEO from "../components/seo"
import Header from "./../components/header"
import Intro from "./../components/intro"
import VideoContent from "./../components/videoContent"
import Story from "./../components/story"
import Container from "./../components/container"
import Highlight from "../components/highlight"
import Footer from "../components/footer"
import Rights from "../components/rights"

const IndexPage = () => (
  <div className="font-opensans">
    <SEO title="BT News Tablet Edition" />
    <Header />
    <Intro className="desktop hidden md:block" />
    <Intro className="mobile block md:hidden" />
    <VideoContent />
    <Container className="sm:px-8">
      <div className="w-full lg:w-3/4 xl:w-2/3 mx-auto mt-16">
        <Story />
      </div>
    </Container>
    <div className="bg-btgray-100 mt-8">
      <Highlight />
    </div>
    <div className="bg-btgray-100 mt-4">
      <Footer />
    </div>
    <Rights />
  </div>
)

export default IndexPage

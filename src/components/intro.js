import React from "react"
import Container from "./../components/container"
import Logo from "./../images/bt-logo.svg"
import BackgroundImage from "gatsby-background-image"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const Intro = () => {
  const { desktopImage, mobileImage, btntMobile } = useStaticQuery(graphql`
    query IntroImage {
      desktopImage: file(relativePath: { eq: "desktop-bg-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 2560) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobileImage: file(relativePath: { eq: "default-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      btntMobile: file(relativePath: { eq: "btnt-mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const imageStack = [
    mobileImage.childImageSharp.fluid,
    {
      ...desktopImage.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ]

  return (
    <div className=" text-white relative">
      <BackgroundImage fluid={imageStack} className="bg-right">
        <div className="md:bg-gradient-to-r md:from-btgray-100 md:to-transparent">
          <Container className="py-16 px-4">
            <div className="w-full lg:w-5/6 mx-auto">
              <Logo className="w-btlogomobile md:w-btlogodesktop mx-auto md:mx-0" />
              <h2 className="text-lg md:text-3xl text-center md:text-left text-btgray-200">
                NEWS TABLET EDITION
              </h2>
              <span className="my-4 block text-3xl md:text-6xl font-serif text-center md:text-left">
                Read print the new way.
              </span>
              <ul className="text-base md:text-lg pl-2 text-center md:text-left">
                <li>
                  - Full access to SPHtab e-paper app on your choice of Samsung
                  Android tablet
                </li>
                <li>- Individual access to the BT website and app</li>
                <li>- Access to 2-week e-paper archive</li>
                <li>
                  - Offline reading, news clipping and social media-sharing
                  functions
                </li>
              </ul>
              <p className="text-xl md:text-2xl font-bold mt-16 mb-16 text-center md:text-left">
                $39.90/month for 30 months
              </p>
              <button className="bg-btblue-100 rounded-full py-3 px-16 block md:inline-block font-bold text-base md:text-lg mx-auto md:mx-0">
                BUY NOW
              </button>
            </div>
          </Container>
        </div>
      </BackgroundImage>
      <Image
        fluid={btntMobile.childImageSharp.fluid}
        className="block md:hidden"
      />
    </div>
  )
}

export default Intro

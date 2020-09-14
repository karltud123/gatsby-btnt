import React from "react"
import Container from "./../components/container"
import PlayIcon from "./../images/play.svg"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"

const VideoContent = () => {
  const { ipad } = useStaticQuery(graphql`
    query VIDEO_THUMBNAIL {
      ipad: file(relativePath: { eq: "btnt-video.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Container className="sm:px-8 pt-8">
      <div className="w-full lg:w-3/4 xl:w-2/3 mx-auto">
        <p className="text-lg px-8 sm:px-0">
          Experience the new best way to read the BT print edition.{" "}
          <b>Zoom and share, on the go</b>, via the exclusive SPHtab e-paper app
          that's only available pre-installed on the BT News Tablet.
        </p>
        <a href="https://youtu.be/dryF1hpGK4A" target="blank">
          <BackgroundImage
            fluid={ipad.childImageSharp.fluid}
            className="w-full h-btvideo bg-btgray-100 my-8 relative bg-right"
          >
            <div className="absolute top-0 left-0 right-0 bottom-0">
              <div className="flex justify-center items-center h-full">
                <div className="h-20 w-20 bg-white rounded-full">
                  <PlayIcon className="text-black" />
                </div>
              </div>
            </div>
          </BackgroundImage>
        </a>
      </div>
    </Container>
  )
}

export default VideoContent

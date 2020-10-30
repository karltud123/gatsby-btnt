import React from "react"
import Container from "./../components/container"
import { useStaticQuery, graphql } from "gatsby"
import YouTube from "./YouTube"

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
        <YouTube className="mt-10" />
      </div>
    </Container>
  )
}

export default VideoContent

import React from "react"
import Container from "./../components/container"
import PlayIcon from "./../images/play.svg"

const VideoContent = () => (
  <Container className="sm:px-8 pt-8">
    <div className="w-full lg:w-3/4 xl:w-2/3 mx-auto">
      <p className="text-lg px-8 sm:px-0">
        Experience the new best way to read the BT print edition.{" "}
        <b>Zoom and share, on the go</b>, via the exclusive SPHtab e-paper app
        that's only available pre-installed on the BT News Tablet.
      </p>
      <div className="w-full h-btvideo bg-btgray-100 my-8 relative">
        <div className="absolute top-0 left-0 right-0 bottom-0">
          <div className="flex justify-center items-center h-full">
            <div className="h-20 w-20 bg-white rounded-full">
              <PlayIcon className="text-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
)

export default VideoContent

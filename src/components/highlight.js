import React from "react"
import Container from "./../components/container"
import IpadA from './../components/ipada'
import IpadB from './../components/ipadb'

const Highlight = () => (
  <Container className="py-16 px-8">
    <div className="w-full lg:w-5/6 mx-auto text-white flex flex-wrap">
      <div className="w-full md:w-1/2 md:pr-2 my-8 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-serif">
          You also get:
            <span className="block font-sans">
            Full access to The Business Times website and Android app
            </span>
        </h2>
        <p className="text-base md:text-lg mt-8">
          Wep or app, e-paper or HTML, read BT your way.
          </p>
        <p className="text-lg mb-8">Read print the new way.</p>
        <a
          href="/"
          className="rounded-full text-base md:text-lg my-8 inline-block bg-btblue-100 font-bold py-4 px-8"
        >
          FIND OUT MORE
          </a>
      </div>
      <div className="w-full md:w-1/2 md:pl-2 flex flex-wrap my-8">
        <span className="text-2xl md:text-3xl text-btgray-300 text-center block py-2 w-full">
          Choose between
          </span>
        <div className="w-1/2">
          <span className="block text-center text-sm font-bold">
            Samsung Galaxy Tab A(Wi-Fi)
          </span>
          <IpadA />
        </div>
        <div className="w-1/2">
          <span className="block text-center text-sm font-bold">
            Samsung Galaxy S6 Lite (LTE)
          </span>
          <IpadB />
        </div>
      </div>
    </div>
  </Container>
)

export default Highlight

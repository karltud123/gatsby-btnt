import React from "react"
import Container from "./../components/container"
import IpadA from "./../components/ipada"
import IpadB from "./../components/ipadb"

const Highlight = () => (
  <Container className="py-16 px-8">
    <div className="w-full lg:w-5/6 mx-auto text-white flex flex-wrap">
      <div className="w-full md:w-1/2 md:pr-2 my-8 text-center md:text-left">
        <h2 className="text-3xl md:text-6xl font-serif leading-11 leading-normal">
          You also get:
          <span className="block font-opensans font-light text-xl md:text-5xl leading-normal md:leading-11">
            Full access to The Business Times website and Android app
          </span>
        </h2>
        <p className="text-sm md:text-lg mt-8">
          Wep or app, e-paper or HTML, read BT your way.
        </p>
        <p className="text-sm md:text-lg mb-8">Read print the new way.</p>
        <a
          href="https://www.sphsubscription.com.sg/eshop/?r=promotion/2020btnewstabletpromo"
          target="_blank"
          className="rounded-full text-base md:text-lg my-8 inline-block bg-btblue-100 hover:bg-gray-200 hover:text-btblue-100 font-bold py-4 px-8"
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
            Samsung Galaxy S6 Lite (LTE)
          </span>
          <a
            href="https://www.sphsubscription.com.sg/eshop/?r=promotion/2020btnewstabletpromo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IpadA />
          </a>
        </div>
        <div className="w-1/2">
          <span className="block text-center text-sm font-bold">
            Samsung Galaxy Tab A Wi-Fi
          </span>
          <a
            href="https://www.sphsubscription.com.sg/eshop/?r=promotion/2020btnewstabletpromo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IpadB />
          </a>
        </div>
      </div>
    </div>
  </Container>
)

export default Highlight

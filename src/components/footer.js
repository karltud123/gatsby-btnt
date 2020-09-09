import React from "react"
import Logo from "./../images/bt-logo.svg"
import BTLifestyleLogo from "./../images/bt-lifestyle-logo.svg"
import Container from "./container"
import MainMenu from "./mainmenu"
import AllNewsMenu from "./allnewsmenu"
import WeeklyMenu from "./weeklymenu"
import LifestyleMenu from "./lifestylemenu"
import Social from "./social"

const Footer = () => (
  <Container className="py-16 px-8">
    <div className="w-full lg:w-11/12 mx-auto text-white flex flex-wrap">
      <div className="w-full md:w-2/3">
        <Logo
          width="287"
          className="text-white block relative mx-auto md:mx-0"
        />
        <div className="grid grid-cols-3 gap-4">
          <MainMenu />
          <AllNewsMenu />
          <WeeklyMenu />
        </div>
      </div>
      <div className="w-full md:w-1/3 md:pl-16 md:border-l border-white">
        <BTLifestyleLogo
          width="142"
          className="text-btblue-lifestyle block relative mx-auto md:mx-0"
        />
        <LifestyleMenu />
      </div>
      <div className="w-full">
        <Social />
      </div>
    </div>
  </Container>
)

export default Footer

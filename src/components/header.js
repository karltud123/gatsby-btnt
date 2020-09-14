import React from "react"
import Logo from "../images/bt-logo.svg"

const Header = props => (
  <div className="bg-btgray-100 text-white border-b border-white">
    <div className="p-4 container mx-auto relative">
      <Logo width="270" className="block mx-auto md:mx-0" />
      <div className="hidden md:block absolute top-0 bottom-0 left-0 right-0 text-center p-4 uppercase text-xs">
        {dayMaps[new Date().getUTCDay()]}, {month} {day}, {year}
      </div>
    </div>
  </div>
)

export default Header
const dayMaps = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
const date = new Date();
const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);

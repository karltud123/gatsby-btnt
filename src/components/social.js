import React from "react"
import Facebook from "./../images/facebook.svg"
import Twitter from "./../images/twitter.svg"
import Telegram from "./../images/telegram.svg"
import Instagram from "./../images/instagram.svg"
import Linkedin from "./../images/linkedin.svg"
import RSS from "./../images/rss.svg"
import Newspaper from "./../images/newspaper.svg"

const Social = () => (
  <div className="flex flex-wrap justify-center mt-32">
    <a
      href="https://www.facebook.com/thebusinesstimes"
      className="block text-center hover:text-btgray-400 px-4 lg:px-8 py-2"
    >
      <Facebook width="24" height="39" className="block mx-auto" />
      <span className="text-xs">FACEBOOK</span>
    </a>
    <a
      href="https://twitter.com/businesstimes"
      className="block text-center hover:text-btgray-400 px-4 lg:px-8 py-2"
    >
      <Twitter width="32" height="39" className="block mx-auto" />
      <span className="text-xs">TWITTER</span>
    </a>
    <a
      href="https://t.me/BizTimes"
      className="block text-center hover:text-btgray-400 px-4 lg:px-8 py-2"
    >
      <Telegram width="32" height="39" className="block mx-auto" />
      <span className="text-xs">TELEGRAM</span>
    </a>
    <a
      href="https://www.instagram.com/btlifestyle/"
      className="block text-center hover:text-btgray-400 px-4 lg:px-8 py-2"
    >
      <Instagram width="32" height="39" className="block mx-auto" />
      <span className="text-xs">INSTAGRAM</span>
    </a>
    <a
      href="https://www.linkedin.com/showcase/the-business-times"
      className="block text-center hover:text-btgray-400 px-4 lg:px-8 py-2"
    >
      <Linkedin width="32" height="39" className="block mx-auto" />
      <span className="text-xs">LINKEDIN</span>
    </a>
    <a
      href="https://www.businesstimes.com.sg/rss-feeds"
      className="block text-center hover:text-btgray-400 px-4 lg:px-8 py-2"
    >
      <RSS width="32" height="39" className="block mx-auto" />
      <span className="text-xs">RSS</span>
    </a>
    <a
      href="https://epaper.businesstimes.com.sg/"
      className="block text-center hover:text-btgray-400 px-4 lg:px-8 py-2"
    >
      <Newspaper width="32" height="39" className="block mx-auto" />
      <span className="text-xs">E-PAPER</span>
    </a>
  </div>
)

export default Social

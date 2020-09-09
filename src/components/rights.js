import React from "react"

const Rights = () => (
  <div className="bg-btgray-100 mt-4 text-white text-xs py-4">
    <ul className="flex flex-wrap justify-center">
      <li className="px-4 py-2">
        <a href="##" className="block">
          ABOUT US
        </a>
      </li>
      <li className="px-4 py-2">
        <a href="##" className="block">
          CONTACT US
        </a>
      </li>
      <li className="px-4 py-2">
        <a href="##" className="block">
          HELP
        </a>
      </li>
      <li className="px-4 py-2">
        <a href="##" className="block">
          TERMS & CONDITIONS
        </a>
      </li>
      <li className="px-4 py-2">
        <a href="##" className="block">
          SPH WEBSITES
        </a>
      </li>
      <li className="px-4 py-2">
        <a href="##" className="block">
          DATA PROTECTION POLICY
        </a>
      </li>
    </ul>
    <div className="text-center my-4 text-btgray-500">SPH DIGITAL NEWS</div>
    <div className="text-center my-4 text-btgray-500">
      &copy; {new Date().getFullYear()} SINGAPORE PRESS HOLDINGS LTD. REGN NO.
      198402668E
    </div>
  </div>
)

export default Rights

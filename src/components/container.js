import React from "react"

const Container = props => (
  <div className={"container mx-auto " + props.className}>
    {" "}
    {props.children}
  </div>
)

export default Container

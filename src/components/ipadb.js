import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const IpadB = () => {
  const data = useStaticQuery(graphql`
    query IPAD_B_QUERY {
      ipad: file(relativePath: { eq: "BTNT-tablet-lite-hr.png" }) {
        childImageSharp {
          fluid (quality: 100){
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return <Img fluid={data.ipad.childImageSharp.fluid} />
}

export default IpadB
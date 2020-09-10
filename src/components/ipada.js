import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const IpadA = () => {
  const data = useStaticQuery(graphql`
    query IPAD_A_QUERY {
      ipad: file(relativePath: { eq: "BTNT-tablet-hr.png" }) {
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

export default IpadA
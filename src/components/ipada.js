import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const IpadA = () => {
  const data = useStaticQuery(graphql`
    query IPAD_A_QUERY {
      ipad: file(relativePath: { eq: "ipad-a.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return <Img fluid={data.ipad.childImageSharp.fluid} />
}

export default IpadA
import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const Story = () => {
  const { defaultimage } = useStaticQuery(graphql`
    query DefaultImage {
      defaultimage: file(relativePath: { eq: "btnt-story.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <div className="my-8 flex bg-white flex-col md:flex-row">
      <a
        href="https://www.businesstimes.com.sg/consumer/bt-launches-news-tablet-edition"
        target="_blank"
        className="block w-full md:w-1/3"
      >
        <Image
          fluid={defaultimage.childImageSharp.fluid}
          className="w-full object-cover"
        />
      </a>
      <div className="px-4 pt-0 py-2 w-full md:w-2/3 text-center sm:text-left">
        <h2 className="text-2xl md:text-3xl mb-2 leading-tight">
          BT News Tablet Edition launches
        </h2>
        <div className="text-based md:text-lg">
          Bringing together the best of print and digital in a BT subscription
          bundled with a Samsung tablet, for the ultimate e-paper reading
          experience.
        </div>
        <a
          href="https://www.businesstimes.com.sg/consumer/bt-launches-news-tablet-edition"
          className="rounded-full inline-block border border-btgray-100 font-bold text-xs py-2 px-4 mt-4 hover:bg-btgray-100 hover:text-white"
        >
          READ MORE
        </a>
      </div>
    </div>
  )
}

export default Story

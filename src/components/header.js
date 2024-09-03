import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"
import "./layout.css"

const Header = () => {
  return(
  <header>
    <a href="/">
    <StaticImage
        src="../images/icon.png"
        width={200}
      />
      </a>
      <p>header</p>
  </header>)}


export default Header
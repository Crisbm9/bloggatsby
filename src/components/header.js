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
      <br></br>
      <p>BLOGGATSBY</p>
      <br></br>
  </header>)}


export default Header
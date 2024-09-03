import React from "react";
import "./layout.css"
import Header from "./header";
import Footer from "./footer";


const Layout=({children})=>{
  return(<>
<Header>

</Header>

<main>{children}</main>

<Footer>footer</Footer>
</>)
}
export default Layout
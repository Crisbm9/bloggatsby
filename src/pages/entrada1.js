import React from "react"
import Layout from "../components/layout"
import "../components/layout.css"

import pic from '../images/flor.jpeg';

const Entrada1 = () => {
  
  return (
    <>
    <Layout>
    
    <div className="presentacion1">
      <div className="foto">
        <img src={pic} alt="Mi foto" />
      </div>
      <div>
        <h1>Entrada 1</h1>
        <p>
         blalalalallalalwngjkewfhjhwfjfhwroif
        </p>
      </div>
    </div>
  
   </Layout>
   </>
  )
}

export default Entrada1
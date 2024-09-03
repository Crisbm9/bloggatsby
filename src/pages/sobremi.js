import React from "react"
import Layout from "../components/layout"
import "../components/layout.css"

import pic from '../images/flor.jpeg';

const SobreMi = () => {
  
  return (
    <>
    <Layout>
    
    <div className="presentacion1">
      <div className="foto">
        <img src={pic} alt="Mi foto" />
      </div>
      <div>
        <h1>Sobre mí</h1>
        <p>
          Soy una persona apasionada, dedicada y siempre en busca de crecimiento personal y profesional. Con una actitud positiva y una mente abierta, enfrento los desafíos con determinación y creatividad. Mi capacidad para trabajar en equipo, combinada con una fuerte ética de trabajo, me convierte en un colaborador valioso en cualquier entorno. Valoro la honestidad, la empatía y el respeto en las relaciones, y siempre estoy dispuesto a aprender y mejorar, lo que me impulsa a alcanzar mis metas con éxito.
        </p>
      </div>
    </div>
  
   </Layout>
   </>
  )
}

export default SobreMi
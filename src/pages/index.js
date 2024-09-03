import React from "react"
import Layout from "../components/layout"
import "../components/layout.css"
import pic from '../images/flor.jpeg';

const IndexPage = () => {
  return (
    <>
    <Layout>

    <div className="presentacion">
      <p>Bienvenido a mi blog creado con Gatsby, una plataforma diseñada para ofrecer contenido rápido, moderno y optimizado. Aquí comparto mis ideas, proyectos y temas de interés en un entorno dinámico y elegante. Gatsby me permite combinar la velocidad y flexibilidad de un sitio estático con la riqueza de contenido que merece un blog. Explora, comenta y acompáñame en este viaje digital, donde cada entrada refleja mi pasión por la tecnología, el aprendizaje continuo y la creación de experiencias únicas en la web. ¡Gracias por visitar!</p>
    </div>
    <div className="contenedor-entradas">
      <div className="entrada">
        <img src={pic} />
        <a href="/entrada1"><h2>Entrada 1 del blog</h2></a>
        <p>entrada sobre blablabla</p>
      </div>
      <div className="entrada">
        <img src={pic} />
        <a href="#"><h2>Entrada 2 del blog</h2></a>
        <p>entrada sobre blablabla</p>
      </div>
      <div className="entrada">
        <img src={pic} />
        <a href="#"><h2>Entrada 3 del blog</h2></a>
        <p>entrada sobre blablabla</p>
      </div>
    </div>
   </Layout>
   </>
  )
}

export default IndexPage



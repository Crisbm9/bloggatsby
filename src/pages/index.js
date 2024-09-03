import React from "react"
import Layout from "../components/layout"


const IndexPage = () => {
  return (
    <>
    <Layout>
      <div>
        <ul>
        <li><a href="/sobremi">Sobre mí</a></li>
        <li><a href="/">Gatsby</a></li>
        <li><a href="/">React</a></li>
        </ul>
    </div>
    <div>
       <p>Bienvenido a mi blog creado con Gatsby, una plataforma diseñada para ofrecer contenido rápido, moderno y optimizado. Aquí comparto mis ideas, proyectos y temas de interés en un entorno dinámico y elegante. Gatsby me permite combinar la velocidad y flexibilidad de un sitio estático con la riqueza de contenido que merece un blog. Explora, comenta y acompáñame en este viaje digital, donde cada entrada refleja mi pasión por la tecnología, el aprendizaje continuo y la creación de experiencias únicas en la web. ¡Gracias por visitar!</p>
    </div>
   </Layout>
   </>
  )
}

export default IndexPage



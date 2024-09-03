import * as React from "react"
import { Link } from "gatsby"
import "./layout.css"

const MenuNavegacion = () => {
  return(
    <div className="nav-links">
      <Link to="/">Inicio</Link>
      <Link to="/sobremi">Sobre Mí</Link>
    </div>     
  )
}

export default MenuNavegacion
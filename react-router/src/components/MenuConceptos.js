import { Link, NavLink } from "react-router-dom";

const MenuConceptos = () => {
  return (
    <nav>
      <ol>
        <li>
          <span>Enlaces html (no recomendado): </span>
          <a href="/">Home</a>
          <a href="/acerca">Acerca</a>
          <a href="/contacto">Contacto</a>
        </li>
        <li>
          <span>Componente Link: </span>
          <Link to="/">Home</Link>
          <Link to="/acerca">Acerca</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/no-existe">Error 404</Link>
        </li>
        <li>
          <span>Componente NavLink: </span>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/acerca" exact activeClassName="active">
            Acerca
          </NavLink>
          <NavLink to="/contacto" exact activeClassName="active">
            Contacto
          </NavLink>
        </li>
        <li>
          <span>Paŕametros: </span>
          <Link to="/usuario/angel">Angel</Link>
          <Link to="/usuario/jesus">Jesús</Link>
        </li>
        <li>
          <span>Parámetros de consulta: </span>
          <Link to="/productos">Productos</Link>
        </li>
        <li>
          <span>Redirecciones: </span>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <span>Rutas Anidadas: </span>
          <Link to="/react">React</Link>
        </li>
      </ol>
    </nav>
  );
};

export default MenuConceptos;

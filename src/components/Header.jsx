import { NavLink } from "react-router-dom";

const Header = () => (
  <header className="bg-dark text-light">
    <div className="container pt-4">
      <h1 className="pb-3 display-4 fw-normal">Todos</h1>
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/todos" className="nav-link">
              Todos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;

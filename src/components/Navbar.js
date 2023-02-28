import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="nav">
    <h3>Math Magicians</h3>
    <ul className="nav-links">
      <NavLink
        to="/home"
        className="nav-link"
        style={({ isActive }) => ({
          color: isActive ? 'red' : 'grey',
        })}
      >
        Home
      </NavLink>
      <NavLink
        to="/"
        className="nav-link center"
        style={({ isActive }) => ({
          color: isActive ? 'red' : 'grey',
        })}
      >
        Calculator
      </NavLink>
      <NavLink
        to="/quote"
        className="nav-link "
        style={({ isActive }) => ({
          color: isActive ? 'red' : 'grey',
        })}
      >
        Quote
      </NavLink>
    </ul>
  </nav>
);
export default Navbar;

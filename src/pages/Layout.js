import { Outlet, Link } from "react-router-dom";
import "../App.css"

const Layout = () => {
  return (
    <>
      <nav>
        <ul class="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/oshi_no_ko">Oshi No Ko</Link>
          </li>
          <li>
            <Link to="/bocchi_the_rock">Bocchi The Rock</Link>
          </li>
          <li>
            <Link to="/steins_gate">Steins Gate</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
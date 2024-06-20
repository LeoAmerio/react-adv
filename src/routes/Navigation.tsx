import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from 'react-router-dom';

import logo from '../logo.svg';
import { ShoppingPage } from '../component-patterns/pages/ShoppingPage';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? "nav-active" : "")} >Shopping</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-active" : "")} >About</NavLink>
            </li>
            <li>
              <NavLink to="/users" className={({ isActive }) => (isActive ? "nav-active" : "")} >Users</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          {/* <Route path="/about">
            <h1>About</h1>
          </Route>
          <Route path="/users">
            <h1>Users</h1>
          </Route> */}
          <Route path="/" element={<ShoppingPage />} />
        </Routes>
      </div>
    </Router>
  );
}
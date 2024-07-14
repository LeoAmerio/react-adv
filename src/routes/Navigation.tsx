import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import logo from "../logo.svg";
import {
  RegisterPage,
  FormikBasicPage,
  FormikYupPage,
  FormikComponents,
  FormikAbstraction,
  RegisterFormikPage,
  DynamicForm,
} from "../forms-section/pages";

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/register" activeClassName="nav-active" exact>
                Register Page
              </NavLink>
            </li>
            <li>
              <NavLink to="/formik-register" activeClassName="nav-active" exact>
                Register Formik Page
              </NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic" activeClassName="nav-active" exact>
                Formik Page
              </NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup" activeClassName="nav-active" exact>
                Fromik Yup
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-components"
                activeClassName="nav-active"
                exact
              >
                Fromik Components
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-abstraction"
                activeClassName="nav-active"
                exact
              >
                Fromik Abs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/form-dynamic"
                activeClassName="nav-active"
                exact
              >
                From Dynamic
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/form-dynamic">
            <DynamicForm />
          </Route>
          <Route path="/formik-yup">
            <FormikYupPage />
          </Route>
          <Route path="/formik-abstraction">
            <FormikAbstraction />
          </Route>
          <Route path="/formik-components">
            <FormikComponents />
          </Route>
          <Route path="/formik-basic">
            <FormikBasicPage />
          </Route>
          <Route path="/formik-register">
            <RegisterFormikPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

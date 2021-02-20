import logo from "./logo.svg";
import "./App.css";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import LoginPage from "./components/Login/LoginPage";
import SearchPage from "./components/Search/SearchPage";
import FavoritesPage from "./components/Favorites/FavoritesPage";
import { NavLink } from "react-router-dom";
import store from "./redux/Store";
import { Provider } from "react-redux";

function App() {
  return (
    <Router>
      <>
        <nav className="menu">
          <NavLink
            className="text-center link"
            activeClassName="active-link"
            to="/login"
          >
            Login
          </NavLink>
          <NavLink
            className="text-center link"
            activeClassName="active-link"
            to="/search"
          >
            Search
          </NavLink>
          <NavLink
            className="text-center link"
            activeClassName="active-link"
            to="/favorites"
          >
            Favorites
          </NavLink>
          <NavLink
            className="text-center link"
            activeClassName="active-link"
            to="/special"
          >
            Special
          </NavLink>
        </nav>
        <main>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/search" component={SearchPage} />
            <Route path="/favorites" component={FavoritesPage} />
            {/* <Route path="/special" component={SpecialPage} /> */}
            <Redirect to="/login" />
          </Switch>
        </main>
        <footer></footer>
      </>
    </Router>
  );
}
export default App;
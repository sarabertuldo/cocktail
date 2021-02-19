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

function App() {
  return (
    <Router>
      <>
        <nav>
          <NavLink to="/Login">Login</NavLink>
          <NavLink to="/Search">Search</NavLink>
          <NavLink to="/Favorites">Favorites</NavLink>
        </nav>
        <main>
          <Switch>
            <Route path="/login" component={LoginPage}>
              Login
            </Route>
            <Route path="/search" component={SearchPage}>
              Search
            </Route>
            <Route path="/favorites" component={FavoritesPage}>
              Favorites
            </Route>
            <Route path="*">
              <Redirect to="/search" />
            </Route>
          </Switch>
        </main>
        <footer>Footer</footer>
      </>
    </Router>
  );
}

export default App;

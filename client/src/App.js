import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Save from "./pages/saved";
import Search from "./pages/search";
import NavBar from "./components/navbar";
import JumboTron from "./components/jumbotron";

function App() {
  return (
    <>
      <NavBar />
      <JumboTron />
      <Router>
        <Route exact path={["/", "/search"]}>
          <Search />
        </Route>
        <Route exact path={"/save"}>
          <Save />
        </Route>
      </Router>
    </>
  );
}

export default App;

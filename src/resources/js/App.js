import "./index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import Projects from "./Projects";
import NotFound from "./NotFound";
import GlobalStyle from "./Global";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            {/* all of the routes go here */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

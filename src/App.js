import "./index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import Projects from "./Projects";
import Contact from "./Contact";
import NotFound from "./NotFound";
import "./index.scss";
// import { useEffect, useState } from "react";

function App() {

  // const [color, setColor] = useState("white");

  // useEffect(() => {
  //   // Update the document title using the browser API
  //   console.log("hello I'm alive");
  //   var colors = ["blue", "green", "orange", "tan", "red", "purple"];
  //   var randomColor = colors[Math.floor(Math.random() * colors.length)];
  //   console.log(randomColor);
  //   // App.style.setProperty("background-color", randomColor);
  //   setColor(randomColor);
  // }, []);

  return (
    <Router>
      {/* <div className="App" style={{ backgroundColor: `${color}` }}> */}
      {/* <div className={`App ${color}`}> */}
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
            <Route exact path="/contact">
              <Contact />
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

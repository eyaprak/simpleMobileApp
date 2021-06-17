import { Component } from "react";
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
//import FirstComponent from "./Components/FirstComponent";
//import HelloWorld from './Components/HelloWorld';
//import Counter from './Components/Counter'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Views/Home'
import About from "./Views/About";
import ContactUs from "./Views/ContactUs";
import Product from "./Views/Product";

//import {Form} from './form';




//const listeArray = ["123","456","789"];


class App extends Component {

  render() {
    return (
      <div className="relative pb-10 min-h-screen">
        <Router>
          <Header />

          <div className="p-3">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact-us">
              <ContactUs />
            </Route>
            <Route path="/products/:id">
              <Product />
            </Route>
          </Switch>
          </div>

          <Footer />
        </Router>


      </div>
    );
  }
}

export default App;

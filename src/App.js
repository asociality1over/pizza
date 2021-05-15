import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Signup from "./components/Signup";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="dark:bg-gray-800">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

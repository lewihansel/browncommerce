import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Body";
import Checkout from "./components/checkout/Checkout";
import Login from "./components/account/Login";
import { useStateValue } from "./context/GlobalState";
import { projectAuth, projectDB } from "./config/firebase";

function App() {
  // eslint-disable-next-line no-empty-pattern
  const [{ cart, user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscibe = projectAuth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          payload: {
            user: authUser,
          },
        });
      } else {
        dispatch({
          type: "SET_USER",
          payload: {
            user: null,
          },
        });
      }
    });
    return () => {
      //cleanup here
      unsubscibe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    projectDB
      .collection("products__brownCommerce")
      .orderBy("id", "asc")
      .get()
      .then((docs) => {
        let data = [];
        docs.forEach((doc) => {
          data.push({ ...doc.data(), id: doc.id });
        });
        dispatch({
          type: "GET_ALL_PRODUCTS",
          payload: data,
        });
      });
  }, []);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/checkout">
            <Navbar />
            <Checkout />
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/">
            <Navbar />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

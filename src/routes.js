import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Create from "./pages/Create";

function Routes() {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <Switch>
            <Route {...props} path="/" exact component={Login} />
            <Layout {...props}>
              <Route path="/categories" component={Categories} />
              <Route path="/products" component={Products} />              
              <Route path="/create" component={Create} />
            </Layout>
            <Route {...props} path="*" exact={true} component={NotFound} />
          </Switch>
        )}
      />
    </BrowserRouter>
  );
}

export default Routes;

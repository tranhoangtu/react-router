import { Redirect, Route, Router, Switch } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import ProductDetails from "./components/ProductDetails";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div>
      <MainHeader />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/welcome" />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/products/:productId">
          <ProductDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

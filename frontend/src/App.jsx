import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import DrugList from "./pages/DrugList";
import Stock from "./pages/Stock";
import Forecast from "./pages/Forecast";
import Invoice from "./pages/chemist/Invoice";
import OrderHistory from "./pages/chemist/OrderHistory";
import RemoteOrder from "./pages/chemist/RemoteOrder";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Index from "./pages/Index";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route path="/dashboard">
          <Home />
        </Route>
        <Route path="/druglist">
          <DrugList />
        </Route>
        <Route path="/stock">
          <Stock />
        </Route>
        <Route path="/forecast">
          <Forecast />
        </Route>
      </Switch>
      <Switch>
        <Route path="/invoice">
          <Invoice />
        </Route>
        <Route path="/orderhistroy">
          <OrderHistory />
        </Route>
        <Route path="/remoteorder">
          <RemoteOrder />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

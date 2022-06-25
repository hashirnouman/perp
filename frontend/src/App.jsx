import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import DrugList from "./pages/DrugList";
import Stock from "./pages/Stock";
import Forecast from "./pages/Forecast";
import Invoice from "./pages/chemist/Invoice";
import OrderHistory from "./pages/chemist/OrderHistory";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Index from "./pages/Index";
import CustomerPage from "./pages/customer/CustomerPage";

function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />

        <Route path="/dashboard" component={Home}  />
        <Route path="/druglist" component={DrugList}  />
        <Route path="/stock" component={Stock}  />
        <Route path="/forecast" component={Forecast}  />
        <Route path="/invoice" component={Invoice}  />
        <Route
          path="/orderhistroy"
          component={OrderHistory}
          
        />
        <Route path="/meds" component={CustomerPage}  />
      </Switch>
    </Router>
  );
}

export default App;

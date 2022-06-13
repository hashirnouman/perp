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
import { useState, useEffect } from "react";
import ProtectedRoute from "./ProtectedRoute";
function App() {
  const [name, setName] = useState("");

  const [isAuth, setisAuth] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      console.log(localStorage.getItem("token"));

      setisAuth(true);
    }
  }, []);

  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />

        <ProtectedRoute path="/dashboard" component={Home} isAuth={isAuth} />
        <ProtectedRoute path="/druglist" component={DrugList} isAuth={isAuth} />
        <ProtectedRoute path="/stock" component={Stock} isAuth={isAuth} />
        <ProtectedRoute path="/forecast" component={Forecast} isAuth={isAuth} />
        <ProtectedRoute path="/invoice" component={Invoice} isAuth={isAuth} />
        <ProtectedRoute
          path="/orderhistroy"
          component={OrderHistory}
          isAuth={isAuth}
        />
        <ProtectedRoute path="/shop" component={CustomerPage} isAuth={isAuth} />
      </Switch>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import ListCustomers from "./containers/ListCustomers";
import CustomerContainer from "./containers/CustomerContainer";
import NewCustomerContainer from "./containers/NewCustomerContainer";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/customers/new" component={NewCustomerContainer}></Route>
        <Route
          path="/customers/:dni"
          render={(props) => (
            <CustomerContainer dni={props.match.params.dni}></CustomerContainer>
          )}
        ></Route>
        <Route path="/customers" component={ListCustomers}></Route>
        <Route path="/" component={HomeContainer}></Route>
      </Switch>
    </Router>
  );
}

export default App;

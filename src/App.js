import logo from './logo.svg';
import BurgerPage from './pages/BurgerBuilder';
import { BrowserRouter,  Route, Switch } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import Customer from "./pages/Customer";
import CheckOut from "./pages/CheckOut";

function App() {

  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LandingPage ></LandingPage>
        </Route>
        <Route path="/Customer" component={Customer} />
        <Route path="/BurgerPage" component={BurgerPage} />
        <Route path="/CheckOut" component={CheckOut} />

        {/* <Route path="/BurgerPage">
          <BurgerPage></BurgerPage>
        </Route> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;

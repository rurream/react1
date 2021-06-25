// import logo from './logo.svg';
import Contador from './components/Contador';
import Cards from './components/Cards';
import AjustarPrecios from './components/AjustarPrecios';
import Carro from './components/Carro';
import './App.css'
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className=" App">
      <Router>
        <NavBar />
        <Switch>
        <Route path="/" exact>
            <Contador />
          </Route>
          <Route path="/contador" exact>
            <Contador />
          </Route>
          <Route path="/cards" exact>
            <Cards />
          </Route>
          <Route path="/nuevo" exact>
            <Cards />
          </Route>
          <Route path="/ajustarPrecios" exact>
            <AjustarPrecios />
          </Route>
          <Route path="/carro" exact>
            <Carro />
          </Route>
        </Switch>
      </Router>



    </div>
  );
}

export default App;

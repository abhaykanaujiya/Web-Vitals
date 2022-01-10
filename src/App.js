import { Header } from "./Components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { UsersTable } from "./Pages/UsersData/UsersTable";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Header} />
        <Route path='/homePage' component={HomePage} />
        <Route path='/table' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

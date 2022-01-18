import HomePage from "./Pages/HomePage/HomePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UsersTable from "./Pages/UsersDataTable/UsersTable";
import About from "./Pages/About/About";
import Header from "./Components/Header/Header";
import "./App.css";
import { Reports } from "./Pages/Reports/Reports";
function App() {
  return (
    <BrowserRouter>
      <Route path='/' component={Header} />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/table' component={UsersTable} />
        <Route path='/pageInsight/:userId' component={Reports} />
        <Route path='/about' component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

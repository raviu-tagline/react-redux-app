import "./App.css";
import NavHeader from "./components/header/NavHeader";
import Login from "./components/Login";
import RegisterContainer from "./containers/RegisterContainer";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/create">
          <RegisterContainer />
        </Route>
      </Router>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/hello">
          <h1>Hello</h1>
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/movie">
          <Detail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import { Route } from "react-router-dom";
import OktaMain from "./Flow/OktaMain";
import App1 from "./Flow/App1";
import App2 from "./Flow/App2";

function App() {
  return (
    <>
      <Route exact path="/">
        <OktaMain />
      </Route>
      <Route path="/App1">
        <App1 />
      </Route>
      <Route path="/App2">
        <App2 />
      </Route>
    </>
  );
}

export default App;

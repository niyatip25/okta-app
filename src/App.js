import { Route } from "react-router-dom";
import OktaMain from "./Flow/OktaMain";
import NodeDetails from "./Flow/NodeDetails";

function App() {
  return (
    <>
      <Route exact path="/">
        <OktaMain />
      </Route>
      <Route exact path="/okta">
        <OktaMain />
      </Route>
      <Route exact path="/okta/:id">
        <NodeDetails />
      </Route>
    </>
  );
}

export default App;

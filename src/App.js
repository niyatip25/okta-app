import { Route } from "react-router-dom";
import OktaMain from "./Flow/OktaMain";
import NodeDetails from "./Flow/NodeDetails";
import NotFoundPage from "./Flow/NotFoundPage";

const App = () => {
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
      {/* <Route component={NotFoundPage} /> */}
    </>
  );
};

export default App;

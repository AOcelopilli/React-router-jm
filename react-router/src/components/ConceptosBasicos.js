import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Acerca from "../pages/Acerca";
import Contacto from "../pages/Contacto";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";

export const ConceptosBasicos = () => {
  return (
    <div>
      <h2>Conceptos Básicos</h2>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/acerca" component={Acerca} />
          <Route exact path="/contacto" component={Contacto} />
          <Route path="*" component={Error404} />
        </Switch>
      </Router>
    </div>
  );
};

/* export const ConceptosBasicos = () => {
  return (
    <div>
      <h2>Conceptos Básicos</h2>
      <Router>
        <Switch>
          <Route exact path="/acerca">
            <Acerca />
          </Route>
          {<Route exact path="/contacto" component={Contacto} />}
          <Route
            path="/contacto"
            children={
              <>
                <Contacto /> <p>Holi</p>
              </>
            }
          />
          <Route exact path="/">
            <h3>Home</h3>
            <p>Bienvenidos</p>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
 */
export default ConceptosBasicos;

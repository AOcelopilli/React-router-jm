import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Acerca } from "../pages/Acerca";
import { Contacto } from "../pages/Contacto";

export const ConceptosBasicos = () => {
  return (
    <div>
      <h2>Conceptos Básicos</h2>
      <Router>
        <Switch>
          <Route exact path="/acerca">
            <Acerca />
          </Route>
          {/* <Route exact path="/contacto" component={Contacto} /> */}
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

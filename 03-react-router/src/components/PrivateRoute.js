import { Redirect, Route } from "react-router";

/* const PrivateRoute = (props) => {
  return (
    <Route
      exact={props.exact}
      path={props.path}
      component={props.component}
    ></Route>
  );
}; */

/* const PrivateRoute = (props) => {
  return <Route {...props} />;
};
 */

/* Simulando autotenticación */
let auth;
auth = null;
auth = true;

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest}>{auth ? <Component /> : <Redirect to="/login" />}</Route>
  );
};

export default PrivateRoute;

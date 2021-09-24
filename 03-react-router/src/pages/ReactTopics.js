import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";

const Topic = () => {
  let { topic } = useParams();

  return (
    <div>
      <h4>{topic}</h4>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis,
        beatae? Corporis tempora commodi facere laboriosam. Reprehenderit dicta
        commodi, laboriosam, consectetur eos tenetur, fugiat quam aliquid
        voluptatem placeat et libero beatae!
      </p>
    </div>
  );
};

const ReactTopics = () => {
  // let match = useRouteMatch();
  // console.log(match);

  //'path' nos permite construir rutas lelativas <Route>, mientras que 'url' nos permite construir enlaces relativos <Link> o <NavLink>

  let { path, url } = useRouteMatch();
  return (
    <div>
      <h3>Temas de React</h3>
      <ul>
        <li>
          <Link to={`${url}/jsx`}>JSX</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to={`${url}/props`}>Props</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to={`${url}/estado`}>Estado</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to={`${url}/componentes`}>Componentes</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <h4>Elige un tema de React</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
            est non voluptatum quae natus consequatur deleniti? Necessitatibus
            velit, laboriosam quis saepe ratione consectetur eius laudantium,
            temporibus inventore in, perspiciatis ex.
          </p>
        </Route>
        <Route path={`${path}/:topic`} component={Topic} />
      </Switch>
    </div>
  );
};

export default ReactTopics;

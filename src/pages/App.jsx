import { Switch, Route } from 'react-router-dom';

import routes from 'routes';
import HeaderContainer from "containers/HeaderContainer";
import './App.css';

const RouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.path}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
};

const App = () => {
  return (
    <>
      <HeaderContainer/>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </>
  );
};

export default App;

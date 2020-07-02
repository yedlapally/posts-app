import * as React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, HashRouter, Route, BrowserRouter, Redirect } from "react-router-dom";
import { IRoute } from "./model/IRoute"
import routes from "./routes/routes";

export const App = () => {
  const isUserAuthincate = () => {
    const isUserValid = window.sessionStorage.getItem("isAuthenticate");
    if (isUserValid && JSON.parse(isUserValid))
      return true;
    else return false;
  };

  const PrivateRoute: React.FC<IRoute> = ({ component: Component, ...rest }: IRoute) => (
    <Route
      {...rest}
      render={(props) =>
        isUserAuthincate() === true ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          )
      }
    />
  );

  return (
    <>
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) =>
            route.isPrivateRoute ? (
              <PrivateRoute
                {...route}
                key={index}
              />
            ) : (
                <Route
                  path={route.path}
                  component={route.component}
                  exact={true}
                  key={index}
                />
              )
          )}
          <Route path="/" render={() => <Redirect to="/login" />} />

        </Switch>
      </BrowserRouter>
    </>
  );
};
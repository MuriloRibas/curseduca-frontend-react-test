import React from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom';

interface PrivateRouteInterface extends RouteProps {
    component: any
    hasToken: boolean
}

export default function PrivateRoute(props: PrivateRouteInterface) {
    const { component: Component, hasToken, ...rest } = props;

    return (
      <Route
        {...rest}
        render={(routeProps) =>
          hasToken ? (
            <Component {...routeProps}/>
          ) : (
            <Redirect
              to={{
                pathname: "/login"
              }}
            />
          )
        }
      />
    );
  }
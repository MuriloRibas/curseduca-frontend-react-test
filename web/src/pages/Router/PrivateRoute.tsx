import React, { useState, useEffect } from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom';

interface PrivateRouteInterface extends RouteProps {
    component: any
    token: string
}

export default function PrivateRoute(props: PrivateRouteInterface) {
    const { component: Component, token, ...rest } = props;

    return (
      <Route
        {...rest}
        render={(routeProps) =>
          token !== '' ? (
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
import React, { Component, Suspense } from "react";
import { Route, Router, Redirect } from "react-router-dom";

import Routers from "./routes";

import * as Layout from "../layout";

import { history } from "service/helpers";

import { NotificationContainer } from "react-notifications";

import CodeSplitter from "service/helpers/CodeSplitter";
import { LoadingIndicator } from "utilities";
class RoutesClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderRoute: false,
      pathname: null,
      loading: true,
    };
  }

  render() {
    return (
      <Router history={history}>
        <Suspense fallback={<LoadingIndicator />}>
          {Routers.map(
            ({
              component,
              name,
              componentPath = "",
              redirect,
              path,
              exact = false,
              auth = true,
              childrens = [],
            }) => {
              if (childrens.length > 0) {
                return (
                  <Route
                    path={path}
                    exact={exact}
                    key={path}
                    render={(props) => {
                      if (redirect) {
                        if (props.location.pathname === path) {
                          props.history.push(redirect);
                        }
                      }

                      const LayoutComponent = Layout[component];

                      return (
                        <LayoutComponent {...props}>
                          <Suspense fallback={<div>Loading...</div>}>
                            {childrens.map(
                              ({
                                componentPath: childComponentPath,
                                name = "",
                                path: childrenPath,
                                exact = false,
                                auth = true,
                              }) => {
                                CodeSplitter.addComponent(
                                  childComponentPath,
                                  name
                                );

                                return (
                                  <Route
                                    path={path + childrenPath}
                                    exact={exact}
                                    key={path + childrenPath}
                                    render={(props) => {
                                      let PageComponent =
                                        CodeSplitter.getComponent(name);

                                      return <PageComponent {...props} />;
                                    }}
                                  />
                                );
                              }
                            )}
                          </Suspense>
                        </LayoutComponent>
                      );
                    }}
                  />
                );
              }

              CodeSplitter.addComponent(componentPath, name);

              return (
                <Route
                  path={path}
                  exact={exact}
                  key={component || 2322}
                  render={(props) => {
                    if (component) {
                      let PageComponent = CodeSplitter.getComponent(name);
                      return <PageComponent />;
                    }

                    if (redirect) {
                      if (props.location.pathname === path) {
                        return <Redirect to={redirect} />;
                      }
                    }

                    return <div />;
                  }}
                />
              );
            }
          )}

          <NotificationContainer />
        </Suspense>
      </Router>
    );
  }
}

export default RoutesClass;

import React, { useReducer } from "react";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

// components
import Layout from "./components/Layout";

// theme
import { lightTheme, darkTheme } from "./theme/appTheme";

// app routes
import { routes } from "./config";

// constants
import { APP_TITLE } from "./utils/constants";

// interfaces
import RouteItem from "./model/RouteItem.model";

// define app context
const AppContext = React.createContext(null);

// default component
const DefaultComponent = () => <div>No Component Defined.</div>;

function App() {
  const [useDefaultTheme, toggle] = useReducer((theme) => !theme, true);

  // define custom theme
  let theme = createTheme(useDefaultTheme ? lightTheme : darkTheme);
  theme = responsiveFontSizes(theme);

  return (
    <>
      <Helmet>
        <title>{APP_TITLE}</title>
      </Helmet>
      <AppContext.Provider value={null}>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Layout toggleTheme={toggle} useDefaultTheme={useDefaultTheme}>
                {/* for each route config, a react route is created */}
                {routes.map((route: RouteItem, index1) =>
                  route.subRoutes ? (
                    route.subRoutes.map((item: RouteItem, index2) => (
                      <Route
                        key={'r1' + index2}
                        path={`${item.path}`}
                        component={item.component || DefaultComponent}
                        exact
                      />
                    ))
                  ) : (
                    <Route
                      key={'r2' + index1}
                      path={`${route.path}`}
                      component={route.component || DefaultComponent}
                      exact
                    />
                  )
                )}
              </Layout>
            </Switch>
          </Router>
        </ThemeProvider>
      </AppContext.Provider>
    </>
  );
}

export default App;

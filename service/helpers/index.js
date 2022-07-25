import {createStore, applyMiddleware} from "redux";
import {reducers} from "../../Components/reducer";
import thunk from "redux-thunk";
import {api} from "../api";
import {Toast} from "../toast";
import routers from "../../routes/routes";
export const store = createStore(reducers, applyMiddleware(thunk.withExtraArgument({api, Toast})));
const ISSERVER = typeof window === "undefined";
if (!ISSERVER) {
   const history = require("history").createBrowserHistory();
}

let routerCache = {};

export const pageNavigationByName = (locationDetails) => {
  let {name: locationName, params = "", ...rest} = locationDetails;

  let pathname = "";

  let locationProps = rest || {};

  if (routerCache.hasOwnProperty(locationName)) {
    pathname = routerCache[locationName];
  } else {
    for (let i = 0; i < routers.length; i++) {
      let {name = "", childrens = [], path: parentPath} = routers[i];

      if (name === locationName) {
        pathname = parentPath;
        routerCache[locationName] = parentPath;
        break;
      } else {
        for (let j = 0; j < childrens.length; j++) {
          let {name = "", path = ""} = childrens[j];

          if (name === locationName) {
            let fullPath = `${parentPath}${path}`;
            pathname = fullPath;
            routerCache[locationName] = fullPath;
            break;
          }
        }
      }

      if (pathname) break;
    }
  }

  if (params) {
    pathname = Object.keys(params).reduce((acc, keyName) => {
      return acc.replace(`:${keyName}`, params[keyName]);
    }, pathname);
  }

  history.push({pathname, ...locationProps});
};

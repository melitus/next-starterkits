import React, { createContext, useReducer } from "react";

import AppMenuReducer, {
  AppMenuType,
  INIT_STATE as APP_MENU_INIT_STATE,
  AppMenuActions
} from "./AppMenuReducer";
import AuthReducer, {
  AuthType,
  INIT_STATE as AUTH_INIT_STATE,
  AuthActions
} from "./AuthReducer";
import LayoutReducer, {
  LayoutType,
  INIT_STATE as LAYOUT_INIT_STATE,
  LayoutActions
} from "./LayoutReducer";

type InitialStateType = {
  appMenu: AppMenuType;
  auth: AuthType;
  layout: LayoutType;
};

const INIT_STATE = {
  appMenu: APP_MENU_INIT_STATE,
  auth: AUTH_INIT_STATE,
  layout: LAYOUT_INIT_STATE
};

type AppContextType = {
  state: InitialStateType;
  dispatch: React.Dispatch<AppMenuActions | AuthActions | LayoutActions>;
};

const AppContext = createContext<AppContextType>({
  state: INIT_STATE,
  dispatch: () => null
});

const combineReducers = reducers => {
  return (state, action) => {
    const tempState = { ...state };
    Object.keys(reducers).forEach(key => {
      tempState[key] = reducers[key](tempState[key], action);
    });
    return tempState;
  };
};

// const mainReducer = (state: InitialStateType, action: AppMenuActions | AuthActions | LayoutActions) => ({
//   appMenu: AppMenuReducer(state.appMenu, action),
//   auth: AuthReducer(state.auth, action),
//   layout: LayoutReducer(state.layout, action),
// });

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(
    combineReducers({
      appMenu: AppMenuReducer,
      auth: AuthReducer,
      layout: LayoutReducer
    }),
    INIT_STATE
  );
  // const [state, dispatch] = useReducer(mainReducer, INIT_STATE)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };

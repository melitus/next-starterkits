import { ActionMap, createDispatch } from "./contextUtils";

type MenuItem = {
  id: number;
  parentId: number;
  active: boolean;
  children: MenuItem[];
};

export enum Types {
  INIT_MENU = "INIT_MENU",
  INIT_MENU_SUCCESS = "INIT_MENU_SUCCESS",
  CHANGE_ACTIVE_MENU_FROM_LOCATION = "CHANGE_ACTIVE_MENU_FROM_LOCATION",
  CHANGE_ACTIVE_MENU_FROM_LOCATION_SUCCESS = "CHANGE_ACTIVE_MENU_FROM_LOCATION_SUCCESS"
}

export type AppMenuType = {
  menuItems: MenuItem[];
  activatedMenuItemIds: Array<string>;
};

type AppMenuPayload = {
  [Types.INIT_MENU]: undefined;
  [Types.INIT_MENU_SUCCESS]: { menuItems: MenuItem[] };
  [Types.CHANGE_ACTIVE_MENU_FROM_LOCATION]: undefined;
  [Types.CHANGE_ACTIVE_MENU_FROM_LOCATION_SUCCESS]: {
    activatedMenuItemIds: Array<string>;
  };
};

export const INIT_STATE = {
  menuItems: [],
  activatedMenuItemIds: []
};

export type AppMenuActions = ActionMap<AppMenuPayload>[keyof ActionMap<
  AppMenuPayload
>];
export const dispatchMsg = createDispatch<AppMenuPayload>();

const AppMenuReducer = (
  state: AppMenuType = INIT_STATE,
  action: AppMenuActions
) => {
  switch (action.type) {
    case Types.INIT_MENU:
      return { ...state };
    case Types.INIT_MENU_SUCCESS:
      return { ...state, ...action.payload };
    case Types.CHANGE_ACTIVE_MENU_FROM_LOCATION:
      return { ...state };
    case Types.CHANGE_ACTIVE_MENU_FROM_LOCATION_SUCCESS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default AppMenuReducer;

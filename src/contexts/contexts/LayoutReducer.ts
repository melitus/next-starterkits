import { ActionMap, createDispatch } from "./contextUtils";

export enum Types {
  /* Layout action types */
  CHANGE_LAYOUT = "CHANGE_LAYOUT",
  CHANGE_LAYOUT_WIDTH = "CHANGE_LAYOUT_WIDTH",
  CHANGE_SIDEBAR_THEME = "CHANGE_SIDEBAR_THEME",
  CHANGE_SIDEBAR_TYPE = "CHANGE_SIDEBAR_TYPE",
  TOGGLE_RIGHT_SIDEBAR = "TOGGLE_RIGHT_SIDEBAR",
  SHOW_RIGHT_SIDEBAR = "SHOW_RIGHT_SIDEBAR",
  HIDE_RIGHT_SIDEBAR = "HIDE_RIGHT_SIDEBAR",

  /* Layout types and other constants */
  LAYOUT_VERTICAL = "vertical",
  LAYOUT_HORIZONTAL = "topnav",
  LAYOUT_DETACHED = "detached",

  LAYOUT_WIDTH_FLUID = "fluid",
  LAYOUT_WIDTH_BOXED = "boxed",

  LEFT_SIDEBAR_THEME_DEFAULT = "default",
  LEFT_SIDEBAR_THEME_LIGHT = "light",
  LEFT_SIDEBAR_THEME_DARK = "dark",

  LEFT_SIDEBAR_TYPE_FIXED = "fixed",
  LEFT_SIDEBAR_TYPE_CONDENSED = "condensed",
  LEFT_SIDEBAR_TYPE_SCROLLABLE = "scrollable"
}

export type LayoutType = {
  layoutType: string;
  layoutWidth: string;
  leftSideBarTheme: string;
  leftSideBarType: string;
  showRightSidebar: boolean;
};

type LayoutPayload = {
  [Types.CHANGE_LAYOUT]: { layout: string };
  [Types.CHANGE_LAYOUT_WIDTH]: { width: string };
  [Types.CHANGE_SIDEBAR_THEME]: { theme: string };
  [Types.CHANGE_SIDEBAR_TYPE]: { sidebarType: string };
  [Types.TOGGLE_RIGHT_SIDEBAR]: undefined;
  [Types.SHOW_RIGHT_SIDEBAR]: undefined;
  [Types.HIDE_RIGHT_SIDEBAR]: undefined;
};

export const INIT_STATE = {
  layoutType: Types.LAYOUT_VERTICAL,
  layoutWidth: Types.LAYOUT_WIDTH_FLUID,
  leftSideBarTheme: Types.LEFT_SIDEBAR_THEME_DEFAULT,
  leftSideBarType: Types.LEFT_SIDEBAR_TYPE_FIXED,
  showRightSidebar: false
};

export type LayoutActions = ActionMap<LayoutPayload>[keyof ActionMap<
  LayoutPayload
>];
export const dispatchMsg = createDispatch<LayoutPayload>();

const LayoutReducer = (
  state: LayoutType = INIT_STATE,
  action: LayoutActions
) => {
  switch (action.type) {
    case Types.CHANGE_LAYOUT:
      return {
        ...state,
        ...action.payload
      };
    case Types.CHANGE_LAYOUT_WIDTH:
      return {
        ...state,
        ...action.payload
      };
    case Types.CHANGE_SIDEBAR_THEME:
      return {
        ...state,
        ...action.payload
      };
    case Types.CHANGE_SIDEBAR_TYPE:
      return {
        ...state,
        ...action.payload
      };
    case Types.TOGGLE_RIGHT_SIDEBAR:
      return {
        ...state,
        showRightSidebar: !state.showRightSidebar
      };
    case Types.SHOW_RIGHT_SIDEBAR:
      return {
        ...state,
        showRightSidebar: true
      };
    case Types.HIDE_RIGHT_SIDEBAR:
      return {
        ...state,
        showRightSidebar: false
      };
    default:
      return state;
  }
};

export default LayoutReducer;

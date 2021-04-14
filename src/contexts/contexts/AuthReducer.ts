import { ActionMap, createDispatch } from "./contextUtils";

const getLoggedInUser = () => {
  const cookies = new Cookies();
  const user = cookies.get("user");
  return user ? (typeof user === "object" ? user : JSON.parse(user)) : null;
};

/* AUTH */
export enum Types {
  LOGIN_USER = "LOGIN_USER",
  LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS",
  LOGIN_USER_FAILED = "LOGIN_USER_FAILED",
  REGISTER_USER = "REGISTER_USER",
  REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS",
  REGISTER_USER_FAILED = "REGISTER_USER_FAILED",
  LOGOUT_USER = "LOGOUT_USER",
  FORGET_PASSWORD = "FORGET_PASSWORD",
  FORGET_PASSWORD_SUCCESS = "FORGET_PASSWORD_SUCCESS",
  FORGET_PASSWORD_FAILED = "FORGET_PASSWORD_FAILED"
}

export type AuthType = {
  user: {} | null;
  loading: boolean;
  error: string | null;
  passwordResetStatus: string | null;
};

type AuthPayload = {
  [Types.LOGIN_USER]: { username: string; password: string };
  [Types.LOGIN_USER_SUCCESS]: { user: string };
  [Types.LOGIN_USER_FAILED]: { error: string };
  [Types.REGISTER_USER]: { fullname: string; email: string; password: string };
  [Types.REGISTER_USER_SUCCESS]: { user: {} };
  [Types.REGISTER_USER_FAILED]: { error: string };
  [Types.LOGOUT_USER]: { history: any };
  [Types.FORGET_PASSWORD]: { username: string };
  [Types.FORGET_PASSWORD_SUCCESS]: { error: string };
  [Types.FORGET_PASSWORD_FAILED]: { passwordResetStatus: string };
};

export const INIT_STATE = {
  user: getLoggedInUser(),
  loading: false,
  error: null,
  passwordResetStatus: null
};

export type AuthActions = ActionMap<AuthPayload>[keyof ActionMap<AuthPayload>];
export const dispatchMsg = createDispatch<AuthPayload>();

const AuthReducer = (state: AuthType = INIT_STATE, action: AuthActions) => {
  switch (action.type) {
    case Types.LOGIN_USER:
      return { ...state, loading: true };
    case Types.LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload, loading: false, error: null };
    case Types.LOGIN_USER_FAILED:
      return { ...state, error: action.payload, loading: false };
    case Types.REGISTER_USER:
      return { ...state, loading: true };
    case Types.REGISTER_USER_SUCCESS:
      return { ...state, user: action.payload, loading: false, error: null };
    case Types.REGISTER_USER_FAILED:
      return { ...state, error: action.payload, loading: false };
    case Types.LOGOUT_USER:
      return { ...state, user: null };
    case Types.FORGET_PASSWORD:
      return { ...state, loading: true };
    case Types.FORGET_PASSWORD_SUCCESS:
      return {
        ...state,
        passwordResetStatus: action.payload,
        loading: false,
        error: null
      };
    case Types.FORGET_PASSWORD_FAILED:
      return { ...state, error: action.payload, loading: false };
    default:
      return { ...state };
  }
};

export default AuthReducer;

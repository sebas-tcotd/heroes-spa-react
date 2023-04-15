import { types } from "../types/types";

export function authReducer(state = {}, action) {
  switch (action.type) {
    case types.login:
      return { ...state, logged: true, user: action.payload };
    case types.logout:
      return { ...state, logged: false };
    default:
      return state;
  }
}

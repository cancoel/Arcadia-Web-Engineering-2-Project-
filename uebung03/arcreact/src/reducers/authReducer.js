import { LOGIN_USER, LOGIN_FAILED } from "../actions/types";

const initialState = {
  item: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        item: action.payload,
      };
      case LOGIN_FAILED:
        return {
          ...state,
          item: null
        }
    default:
      return state;
  }
}

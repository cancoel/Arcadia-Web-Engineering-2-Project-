import {
  GET_POSTS,
  GET_POSTS_FAILED,
  NO_POSTS,
  NEW_POST,
  NEW_POST_FAILED
} from "../actions/types";

const initialState = {
  item: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case NEW_POST:
      return {
        ...state,
        item: action.payload,
      };
    case GET_POSTS:
      return {
        ...state,
        item: action.payload,
      };
    case NEW_POST_FAILED:
    case GET_POSTS_FAILED:
    case NO_POSTS:
      return {
        ...state,
        item: null,
      };
    default:
      return state;
  }
}

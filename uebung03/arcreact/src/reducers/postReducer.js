import {
  GET_POSTS,
  GET_POSTS_FAILED,
  NO_POSTS,
  NEW_POST,
  NEW_POST_FAILED,
  DELETE_POST
} from "../actions/types";

const initialState = {
  item: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case NEW_POST:
    case GET_POSTS:
    case DELETE_POST:
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

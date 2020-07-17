import {
  GET_POSTS,
  GET_POSTS_FAILED,
  NO_POSTS,
  NEW_POST,
  NEW_POST_FAILED,
} from "./types";

function getPosts() {
  return function (dispatch) {
    fetch(`https://localhost:443/api/threads`, {
      method: "GET",
    })
      .then((response) => {
        if (response.status === 200) {
          response
            .json()
            .then((json) => {
              console.log(json);
              const isEmpty = !json.length;
              if (isEmpty) {
                dispatch({
                  type: NO_POSTS,
                  payload: null,
                });
                return;
              }
              dispatch({
                type: GET_POSTS,
                payload: json,
              });
            })
            .catch((error) => {
              console.error(error);
            });
        }
      })
      .catch((error) => {
        dispatch({
          type: GET_POSTS_FAILED,
          payload: error,
        });
      });
  };
}

function newPost(user, post, allPosts) {
  const requestBody = {
    title: post.title,
    author: user,
    content: post.content,
  };
  return function (dispatch) {
    fetch(`https://localhost:443/api/threads`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (response.status === 200) {
          response
            .json()
            .then((json) => {
              console.log(json);
              dispatch({
                type: NEW_POST,
                payload: [...allPosts, json],
              });
            })
            .catch((error) => {
              return;
            });
        }
      })
      .catch((error) => {
        dispatch({
          type: NEW_POST_FAILED,
          payload: error,
        });
      });
  };
}

export { getPosts, newPost };

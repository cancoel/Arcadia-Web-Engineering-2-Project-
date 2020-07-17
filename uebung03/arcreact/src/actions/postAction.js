import {
  GET_POSTS,
  GET_POSTS_FAILED,
  NO_POSTS,
  NEW_POST,
  NEW_POST_FAILED,
  DELETE_POST,
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
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (response.status === 200) {
          response
            .json()
            .then((json) => {
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

function deletePost(post, allPosts) {
  return function (dispatch) {
    fetch(`https://localhost:443/api/threads/remove/${post._id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.status === 200) {
        dispatch({
          type: DELETE_POST,
          payload: allPosts.filter((item) => item._id !== post._id),
        });
      }
    });
  };
}

export { getPosts, newPost, deletePost };

import { LOGIN_USER, LOGIN_FAILED } from "./types";

function loginUser(user) {
  const utf8 = `${user.username}:${user.password}`; // username + ":" password
  const base64 = btoa(utf8); // convert utf8/unicode -> base64
  return function (dispatch) {
    fetch(`https://localhost:443/api/users/login`, {
      method: "POST",
      headers: {
        Authorization: "Basic " + base64,
        "Access-Control-Allow-Origin": "*",
      },
    })

    .then((response) => {
        if (response.status === 200) {
            dispatch({
                type: LOGIN_USER,
                payload: user.username
            });
        } else {
            throw Error('Auth failed');
        }
    })
    .catch((error) => {
        dispatch({
            type: LOGIN_FAILED,
            payload: error
        });
    })
  };
}

export { loginUser };

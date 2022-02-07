import decode from "jwt-decode";
import instance from "./instance";

// Action Types
import * as actionType from "./types";

export const fetchUsers = () => async (dispatch) => {
  try {
    const res = await instance.get("/users");
    dispatch({
      type: actionType.FETCH_USERS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const signup = (user, navigate, setShow) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in user) formData.append(key, user[key]);

    const res = await instance.post(`/signup`, formData);

    dispatch(setUser(res.data.token));

    navigate("/");
  } catch (error) {
    console.log(error);
    setShow(true);
  }
};

export const signin = (userData, navigate, setShow) => async (dispatch) => {
  try {
    const res = await instance.post("/signin", userData);

    dispatch(setUser(res.data.token));
    navigate("/");
  } catch (error) {
    console.log(error);
    setShow(true);
  }
};

export const logout = (navigate) => {
  navigate("/");
  return setUser();
};

export const checkForToken = () => {
  const token = localStorage.getItem("myToken");

  if (token) {
    const currentTime = Date.now();
    const user = decode(token);

    if (currentTime > user.exp) return setUser();
    else return setUser(token);
  }

  return setUser();
};

const setUser = (token) => {
  if (token) {
    localStorage.setItem("myToken", token);
    return {
      type: actionType.SET_USER,
      payload: decode(token),
    };
  } else {
    localStorage.removeItem("myToken");
    return {
      type: actionType.SET_USER,
      payload: null,
    };
  }
};

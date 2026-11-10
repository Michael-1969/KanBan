'use strict';

import axios from "axios";

const USER_URL = "https://wedev-api.sky.pro/api/user";

export async function loginUser(userData) {
  // console.log("userData-1 = ",USER_URL + "/login");
  // console.log("userData-2 = ",`${USER_URL}/login`);
  try {
    const data = await axios.post(
     USER_URL + "/login",userData,
      {
        headers: {
          "Content-Type": "",
        },
      }
    );
    return data.data.user;
  } catch (error) {
    const err = new Error(error.response.data.error);
    err.cause = error;
    throw err;
  }
}

export async function registerUser({ login, name, password }) {
  try {
    const data = await axios.post(
      USER_URL,
      {
        login,
        name,
        password,
      },
      {
        headers: {
          "Content-Type": "",
        },
      }
    );
    return data.data.user;
  } catch (error) {
    const err = new Error(error.response.data.error);
    err.cause = error;
    throw err;
  }
}

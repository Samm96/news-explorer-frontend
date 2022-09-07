const BASE_URL = "https://api.sam-news-explorer.students.nomoredomainssbs.ru";

function handleServerResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}


export const register = (email, password, name) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": BASE_URL,
    },
    body: JSON.stringify({ email, password, name }),
  }).then(handleServerResponse)
};

export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": BASE_URL,
    },
    body: JSON.stringify({ email, password }),
  }).then(handleServerResponse)
};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": BASE_URL,
      Authorization: `Bearer ${token}`,
    },
  })
    .then(handleServerResponse)
};

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://api.sam-news-explorer.students.nomoredomainssbs.ru"
    : "localhost:3000";

export const register = (email, password, name) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": BASE_URL,
    },
    body: JSON.stringify({ email, password, name }),
  }).then((res) => {
    if (res.status === 201 || 409 || 400 || 429 || 500) {
      return res.json();
    }
    debugger
  }).catch((res) => { return res })
};

export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": BASE_URL,
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    if (res.status === 201 || 409 || 400 || 429 || 500 || 401) {
      return res.json();
    }
  }).catch((res) => { return res })
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
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
    })
    .catch((res) => {
      return res;
    });
};

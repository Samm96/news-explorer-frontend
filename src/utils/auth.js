const BASE_URL =
  process.env.NODE_ENV !== "production"
    ? "http://api.sam-news-explorer.students.nomoredomainssbs.ru"
    : "http://localhost:3000";

export const register = (email, password, username) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": BASE_URL,
    },
    body: JSON.stringify({ email, password, username }),
  }).then((res) => {
    if (res.status === 201) {
      return res.json();
    }
  });
};

export const login = (email, password, username) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": BASE_URL,
    },
    body: JSON.stringify({ email, password, username }),
  }).then((res) => res.json());
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

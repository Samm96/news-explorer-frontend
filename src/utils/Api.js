/** Needed calls to API */

class Api {
  constructor({ baseURL, headers }) {
    this._baseURL = baseURL;
    this._headers = headers;
  }

  /** handles server response */

  _handleServerResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  }

  getAppInfo() {
    return Promise.all([this.getUserInfo(), this.getSavedNews()]);
  }

  /** gets user info */

  getUserInfo({ username }, token) {
    return fetch(`${this._baseURL}/users/me`, {
      headers: {
        authorization: `Bearer ${token}`,
        ...this._headers,
      },
      body: JSON.stringify({
        username,
      }),
    }).then(this._handleServerResponse);
  }

  /** sets user's info (do I need this?) */

  setUserInfo({ username }, token) {
    return fetch(`${this._baseURL}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${token}`,
        ...this._headers,
      },
      body: JSON.stringify({
        username,
      }),
    }).then(this._handleServerResponse);
  }

  /** Accesses Saved News articles by user. Get list. url may be different later */

  getSavedNews(token) {
    return fetch(`${this._baseURL}/articles`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
        ...this._headers,
      },
    }).then(this._handleServerResponse);
  }

  /** Post Saved News articles. url may be different */
  addSavedNews({ articleData }, token) {
    return fetch(`${this._baseURL}/articles`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        ...this._headers,
      },
      body: JSON.stringify({
        articleData,
      }),
    }).then(this._handleServerResponse);
  }

  /** delete saved news */
  deleteNewsCard({ _id }, token) {
    return fetch(`${this._baseURL}/articles/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
        ...this._headers,
      },
    }).then(this._handleServerResponse);
  }
}

export const api = new Api({
  baseURL:
    process.env.NODE_ENV !== "production"
      ? "https://api.sam-news-explorer.students.nomoredomainssbs.ru"
      : "localhost:3000",
  headers: {
    "Access-Control-Allow-Origin":
      process.env.NODE_ENV === "production"
        ? "https://api.sam-news-explorer.students.nomoredomainssbs.ru"
        : "localhost:3000",
    "Content-Type": "application/json",
  },
});

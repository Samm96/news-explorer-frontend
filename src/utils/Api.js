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
        return Promise.all([
            this.getUserInfo(),
            this.getSavedNews(),
        ])
    }


    /** gets user info */

    getUserInfo({ username }) {
        return fetch(`${this._baseURL}/users/me`, {
            headers: {
                // authorization: `Bearer ${token}`,
                ...this._headers,
            },
            body: JSON.stringify({
                username,
            }),
        }).then(this._handleServerResponse);
    }


    /** sets user's info (do I need this?) */

    setUserInfo({ username }) {
        return fetch(`${this._baseURL}/users/me`, {
            method: 'PATCH',
            headers: {
                // authorization: `Bearer ${token}`,
                ...this._headers,
            },
            body: JSON.stringify({
                username,
            }),
        }).then(this._handleServerResponse);
    }


    /** Accesses Saved News articles by user. Get list. url may be different later */

    getSavedNews() {
        return fetch(`${this._baseURL}/saved-news`, {
            method: 'GET',
            headers: {
                // authorization: `Bearer ${token}`,
                ...this._headers,
            }
        }).then(this._handleServerResponse);
    }

    
    /** Post Saved News articles. url may be different */
    addSavedNews({ articleData }) {
        return fetch(`${this._baseURL}/saved-news`, {
            method: 'POST',
            headers: {
                // authorization: `Bearer ${token}`,
                ...this._headers,
            },
        }).then(this._handleServerResponse);
    }


    /** delete saved news */
    deleteNewsCard({ _id }) {
        return fetch(`${this._baseURL}/saved-news/${_id}`, {
            method: 'DELETE',
            headers: {
                // authorization: `Bearer ${token}`,
                ...this._headers,
            }
        }).then(this._handleServerResponse);
    }


    /** toggle save button state */
    toggleSaveButtonState({ articleId, save }) {
        return fetch(`${this._baseURL}/saved-news/${articleId}/saved`, {
            method: save ? 'PUT' : 'DELETE',
            headers: {
                // authorization: `Bearer ${token}`,
                ...this._headers,
            }
        }).then(this._handleServerResponse);
    }

}

export const api = new Api ({
    baseURL: "http://localhost:3000",
  });
class NewsExplorerApi {
  constructor({ baseURL, headers, key }) {
    this._baseURL = baseURL;
    this._headers = headers;
    this._key = key;
  }

  _handleServerResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  }

  getNews(userTopic) {
    const presentDay = new Date().toISOString().slice(0, 10);

    const today = new Date();
    const lastWeek = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000)
      .toISOString()
      .slice(0, 10);

    return fetch(
      `${this._baseURL}/everything?q="${userTopic}"&from=${lastWeek}to=${presentDay}&pageSize=100&apiKey=${this._key}`,
      {
        method: "GET",
        headers: {
          ...this._headers,
        },
      }
    ).then(this._handleServerResponse);
  }
}

export const NewsApi = new NewsExplorerApi({
  baseURL: "https://newsapi.org/v2",
  key: "5e69260d0afd4eb383a753b851075b27",
});

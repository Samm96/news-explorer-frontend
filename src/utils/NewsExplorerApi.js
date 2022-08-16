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

    const getLastWeek = () => {
      const today = new Date();
      const lastWeek = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000)
        .toISOString()
        .slice(0, 10);

      return lastWeek;
    };

    return fetch(
      `${this._baseURL}/everything?q="${userTopic}"&from=${getLastWeek}to=${presentDay}&pageSize=100`,
      {
        method: "GET",
        headers: {
          Authorization: this._key,
          ...this._headers,
        },
      }
    ).then(this._handleServerResponse);
  }
}

export const NewsApi = new NewsExplorerApi({
  baseURL: "https://newsapi.org/v2",
  key: process.env.NEWS_API_KEY,
});

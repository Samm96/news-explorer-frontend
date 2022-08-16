const { BASE_URL, NEWS_API_KEY } = process.env;
console.log(BASE_URL);
const getNews = (articles) => {
    fetch(`${BASE_URL}/everything`)
}
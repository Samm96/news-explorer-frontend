import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

const NewsCardList = () => {
    return (
        <section className="card-list">
            <NewsCard />
            <NewsCard />
            <NewsCard />
        </section>
    )
}

export default NewsCardList;
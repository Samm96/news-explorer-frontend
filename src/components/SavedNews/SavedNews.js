import './SavedNews.css';
import NewsCardList from '../NewsCardList/NewsCardList';
import Header from '../Header/Header';

const SavedNews = ({ homePage }) => {
     return (
        <div className="saved-news">
            <Header logoColor={"black"} homePage={homePage} />
            <div className="saved-news__text-container">

            </div>
        </div>
    )
}

export default SavedNews;
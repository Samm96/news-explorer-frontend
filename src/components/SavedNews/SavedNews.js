import './SavedNews.css';
import NewsCardList from '../NewsCardList/NewsCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const SavedNews = ({userName}) => {
    const placeholder = "Samantha"

    /** keywords is probably going to be an array */
    const placeholderData = {
        savedArticles: 5,
        keywords: "Nature, Yellowstone and 2 others"
    }

     return (
        <div className="saved-news">
            <Header isLoggedIn={true} logoColor={"black"} textColor={"black"} />
            <div className="saved-news__text-container">
                <p className="saved-news__title">Saved articles</p>
                <p className="saved-news__saved">{placeholder || userName}, you have {placeholderData.savedArticles} saved articles</p>
                <p className="saved-news__keywords">By keywords: <b>{placeholderData.keywords}</b></p>
            </div>
            <div className="saved-news__news-container">
                <NewsCardList />
            </div>
            <Footer />
        </div>
    )
}

export default SavedNews;
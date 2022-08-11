import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

const NewsCardList = ({buttonType}) => {
  return (
    <div className="card-list">
      <div className="card-list__container">
        <NewsCard buttonType={buttonType} />
        <NewsCard buttonType={buttonType} />
        <NewsCard buttonType={buttonType}/>
      </div>
    </div>
  );
};

export default NewsCardList;

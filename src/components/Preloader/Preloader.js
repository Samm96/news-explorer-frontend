import "./Preloader.css";

const Preloader = ({ hideLoader }) => {
  return (
    <div className={`preloader preloader${hideLoader}`}>
      <div className="preloader__container">
        <i className="circle-preloader"></i>
        <p className="preloader__text">Searching for news...</p>
      </div>
    </div>
  );
};

export default Preloader;

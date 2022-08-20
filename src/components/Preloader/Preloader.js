import "./Preloader.css";

const Preloader = ({ hideLoader }) => {
  return (
    <div className={`preloader preloader${hideLoader}`}>
      <i className="circle-preloader"></i> 
    </div>
  );
};

export default Preloader;

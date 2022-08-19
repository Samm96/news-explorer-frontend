import "./Preloader.css";

const Preloader = ({ isLoading }) => {
  return (
    <div className="preloader">
      {isLoading ? <i className="circle-preloader"></i> : ""}
    </div>
  );
};

export default Preloader;

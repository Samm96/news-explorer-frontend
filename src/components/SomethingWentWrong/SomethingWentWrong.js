import "./SomethingWentWrong.css";

const SomethingWentWrong = ({ hideWentWrong }) => {
  return (
    <div className={`wrong wrong${hideWentWrong}`}>
      <p className="wrong__text">
        Sorry, something went wrong during the request.
      </p>
      <hr className="wrong__horizontal-line"/>
      <p className="wrong__subtext">
        There may be a connection issue or the server may be down. Please try
        again later.
      </p>
    </div>
  );
};

export default SomethingWentWrong;

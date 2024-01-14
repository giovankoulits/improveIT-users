import FadeLoader from "react-spinners/FadeLoader";

import "./loader.css";
const Loader = ({ loading }) => {
  return (
    <div style={{ margin: loading ? "50px" : "0px" }} className="loader">
      <FadeLoader
        loading={loading}
        color="#00a4e4"
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;

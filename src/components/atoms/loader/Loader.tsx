import { selectLoading } from "../../../redux/selectors/loadingSelector";
import { useSelector } from "react-redux";

//loader component
const Loader = () => {
  const loading = useSelector(selectLoading);

  return (
    <>
      {loading && (
        <div className="loading-wrapper">
          <div className="loader"></div>
          <h2 className="text-center text-xl font-semibold text-secondary-text">
            Loading...
          </h2>
          <p className="hidden w-1/3 text-center text-secondary-text md:flex">
            This may take a few seconds, please don't close this page.
          </p>
        </div>
      )}
    </>
  );
};

export default Loader;

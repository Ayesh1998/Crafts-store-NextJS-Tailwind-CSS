import { selectLoading } from "../../../redux/selectors/loadingSelector";
import { useSelector } from "react-redux";

interface Props {
  title: string;
  onClick?: () => void;
  width?: string;
  padding?: string;
  noIcon?: boolean;
}

//button component
const Button = ({ title, onClick, width, padding, noIcon }: Props) => {
  const loading = useSelector(selectLoading);

  return (
    <button
      className={`${width ? width : "w-auto"} 
       ${padding} custom-button ease group`}
      onClick={onClick}
    >
      <span className="custom-button-first-span"></span>
      <span className="custom-button-second-span"></span>

      <span className="relative z-20 flex items-center font-semibold">
        {noIcon && (
          <svg
            className="relative mr-2 h-5 w-5 flex-shrink-0 text-secondary-text"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        )}
        {loading ? "Loading..." : title}
      </span>
    </button>
  );
};

export default Button;

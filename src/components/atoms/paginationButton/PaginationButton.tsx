interface Props {
  OnClickHandler: () => void;
  type: string;
}

//pagination button component
const PaginationButton = ({ OnClickHandler, type }: Props) => {
  return (
    <li>
      <button
        onClick={() => OnClickHandler()}
        className={type === "prev" ? "pagination-prev" : "pagination-next"}
      >
        {type === "prev" ? "Prev" : "Next"}
      </button>
    </li>
  );
};

export default PaginationButton;

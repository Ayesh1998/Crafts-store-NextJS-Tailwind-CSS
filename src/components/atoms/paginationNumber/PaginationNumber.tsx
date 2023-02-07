interface Props {
  currentPageHandler: (pageNo: number) => void;
  currentPage: number;
  page: number;
}

//pagination number component
const PaginationNumber = ({ currentPage, currentPageHandler, page }: Props) => {
  return (
    <li>
      <button
        onClick={() => currentPageHandler(page)}
        className={`pagination-number ${
          page == currentPage
            ? "bg-gray-500 text-secondary-text"
            : "bg-secondary-background text-primary-text-500 focus:shadow-md hover:bg-gray-200"
        }`}
      >
        {page}
      </button>
    </li>
  );
};

export default PaginationNumber;

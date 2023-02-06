import PaginationButton from "../../atoms/paginationButton/PaginationButton";
import PaginationNumber from "../../atoms/paginationNumber/PaginationNumber";

interface Props {
  currentPageHandler: (pageNo: number) => void;
  nextPagePageHandler: () => void;
  prevPagePageHandler: () => void;
  pages: number[];
  currentPage: number;
}

//pagination component
const Pagination = ({
  currentPageHandler,
  currentPage,
  nextPagePageHandler,
  prevPagePageHandler,
  pages,
}: Props) => {
  return (
    <nav className="flex justify-center pb-16">
      <ul className="inline-flex ">
        <PaginationButton OnClickHandler={prevPagePageHandler} type="prev" />

        {pages.map((page, index) => {
          return (
            <PaginationNumber
              currentPage={currentPage}
              page={page}
              currentPageHandler={currentPageHandler}
              key={index}
            />
          );
        })}

        <PaginationButton OnClickHandler={nextPagePageHandler} type="next" />
      </ul>
    </nav>
  );
};

export default Pagination;

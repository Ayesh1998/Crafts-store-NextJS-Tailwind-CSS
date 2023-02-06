import { selectAuth, selectRole } from "../../../redux/selectors/authSelector";

import Craft from "../../molecules/craft/Craft";
import { Craft as CraftType } from "../../../../typings";
import CraftsListHeader from "../../atoms/craftsListHeader/CraftsListHeader";
import Pagination from "../../molecules/pagination/Pagination";
import { Roles } from "../../../constants/enums";
import { selectCrafts } from "../../../redux/selectors/craftsSelector";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import { useSelector } from "react-redux";
import { useState } from "react";

//crafts panel component
const CraftsPanel = () => {
  const crafts: CraftType[] = useSelector(selectCrafts);
  const role = useSelector(selectRole);
  const isBreakpoint = useMediaQuery(768);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 6;

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = crafts.slice(firstPostIndex, lastPostIndex);
  let pages: number[] = [];

  for (let i = 1; i <= Math.ceil(crafts.length / postsPerPage); i++) {
    pages.push(i);
  }

  //current page handler in pagination
  const currentPageHandler = (pageNo: number) => {
    setCurrentPage(pageNo);
  };

  //next page handler in pagination
  const nextPagePageHandler = () => {
    if (currentPage !== pages.length) {
      setCurrentPage((page) => page + 1);
    }
  };

  //prev page handler in pagination
  const prevPagePageHandler = () => {
    if (currentPage - 1 !== 0) {
      setCurrentPage((page) => page - 1);
    }
  };

  return (
    <section
      className={`crafts-panel-section ${
        !(role === Roles.ADMIN) && "-mt-[100vh]"
      }  `}
    >
      <div className="space-y-10 py-16">
        <CraftsListHeader />
      </div>

      <div className="mx-auto max-w-fit pt-10 pb-24 sm:px-4">
        <div className="crafts-grid">
          {isBreakpoint
            ? currentPosts.map((craft) => (
                <Craft craft={craft} key={craft._id} />
              ))
            : crafts.map((craft) => <Craft craft={craft} key={craft._id} />)}
        </div>
      </div>

      {isBreakpoint && (
        <Pagination
          currentPageHandler={currentPageHandler}
          currentPage={currentPage}
          nextPagePageHandler={nextPagePageHandler}
          prevPagePageHandler={prevPagePageHandler}
          pages={pages}
        />
      )}
    </section>
  );
};

export default CraftsPanel;

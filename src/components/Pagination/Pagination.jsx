import ReactPaginate from "react-paginate";
import css from "./Pagination.module.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
export default function Pagination({ setPage, totalPages, page }) {
  return (
    totalPages > 1 && (
      <ReactPaginate
        forcePage={page - 1}
        containerClassName={css.pagination}
        pageClassName={css.pageItem}
        activeClassName={css.active}
        onPageChange={(event) => setPage(event.selected + 1)}
        pageCount={totalPages}
        breakLabel="..."
        previousLabel={
          page > 1 && <FaAngleLeft size={25} className={css.icon} />
        }
        nextLabel={
          page < totalPages && <FaAngleRight size={25} className={css.icon} />
        }
      />
    )
  );
}

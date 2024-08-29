import FiltersItem from "../FiltersItem/FiltersItem";
import css from "./FiltersList.module.css";
export default function FiltersList({ filters, onClick }) {
  return (
    <ul className={css.list}>
      {filters.map((item) => {
        return <FiltersItem key={item._id} onClick={onClick} />;
      })}
    </ul>
  );
}

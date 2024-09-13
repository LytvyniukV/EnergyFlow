import { Fade } from "react-awesome-reveal";
import FiltersItem from "../FiltersItem/FiltersItem";
import css from "./FiltersList.module.css";
import { useSelector } from "react-redux";
import { selectFilters } from "../../redux/exercises/selectors";
export default function FiltersList() {
  const filters = useSelector(selectFilters);
  return (
    <ul className={css.list}>
      {filters.map((item, ind) => {
        const delay = ((ind + 1) / 12 + 0.2) * 1000;
        return (
          <Fade delay={delay} duration={1800} key={item._id} triggerOnce={true}>
            <FiltersItem item={item} />
          </Fade>
        );
      })}
    </ul>
  );
}

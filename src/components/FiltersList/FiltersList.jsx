import { Fade } from "react-awesome-reveal";
import FiltersItem from "../FiltersItem/FiltersItem";
import css from "./FiltersList.module.css";
export default function FiltersList({
  filters,
  isExercise,
  setExerciseFilter,
}) {
  return (
    <ul className={css.list}>
      {filters.map((item, ind) => {
        const delay = ((ind + 1) / 10 + 0.2) * 1000;
        return (
          <Fade delay={delay} duration={1800} key={item._id} triggerOnce={true}>
            <FiltersItem
              item={item}
              isExercise={isExercise}
              setExerciseFilter={setExerciseFilter}
            />
          </Fade>
        );
      })}
    </ul>
  );
}

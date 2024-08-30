import FiltersItem from "../FiltersItem/FiltersItem";
import css from "./FiltersList.module.css";
export default function FiltersList({
  filters,
  isExercise,
  setExerciseFilter,
}) {
  return (
    <ul className={css.list}>
      {filters.map((item) => {
        return (
          <FiltersItem
            key={item._id}
            item={item}
            isExercise={isExercise}
            setExerciseFilter={setExerciseFilter}
          />
        );
      })}
    </ul>
  );
}

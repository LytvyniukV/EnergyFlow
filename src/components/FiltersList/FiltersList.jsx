import FiltersItem from "../FiltersItem/FiltersItem";
import css from "./FiltersList.module.css";
export default function FiltersList({
  filters,
  setBodyPart,
  setEquipment,
  setMuscles,
  isExercise,
  setFilter,
}) {
  return (
    <ul className={css.list}>
      {filters.map((item) => {
        return (
          <FiltersItem
            key={item._id}
            setBodyPart={setBodyPart}
            setEquipment={setEquipment}
            setMuscles={setMuscles}
            item={item}
            isExercise={isExercise}
            setFilter={setFilter}
          />
        );
      })}
    </ul>
  );
}

import { useDispatch } from "react-redux";
import css from "./FiltersItem.module.css";
import {
  changeExerciseFilter,
  changeIsExerciseSearching,
} from "../../redux/exercises/slice";
export default function FiltersItem({ item }) {
  const dispatch = useDispatch();

  const parseFilterName = () => {
    switch (item.filter) {
      case "Muscles":
        return "muscles";
      case "Body parts":
        return "bodyParts";
      case "Equipment":
        return "equipment";
    }
  };

  const handleClick = () => {
    const filter = parseFilterName();
    dispatch(
      changeExerciseFilter({
        [filter]: item.name,
      })
    );
    dispatch(changeIsExerciseSearching(true));
  };
  return (
    <li
      onClick={handleClick}
      className={css.item}
      style={{
        background: ` linear-gradient(
            0deg,
            rgba(16, 16, 16, 0.7) 0%,
            rgba(16, 16, 16, 0.7) 100%
          ),url(${item.imgUrl})`,
        backgroundColor: " rgba(16, 16, 16, 0.7)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <p className={css.name}>{item.name}</p>
      <p className={css.filter}>{item.filter}</p>
    </li>
  );
}

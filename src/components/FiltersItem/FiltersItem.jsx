import css from "./FiltersItem.module.css";
export default function FiltersItem({ item, isExercise, setExerciseFilter }) {
  const handleClick = (value) => {
    switch (item.filter) {
      case "Muscles":
        isExercise(true);
        setExerciseFilter({
          bodyPart: "",
          equipment: "",
          muscles: value,
        });
        break;
      case "Body parts":
        isExercise(true);
        setExerciseFilter({
          bodyPart: value,
          equipment: "",
          muscles: "",
        });
        break;
      case "Equipment":
        isExercise(true);
        setExerciseFilter({
          bodyPart: "",
          equipment: value,
          muscles: "",
        });
        break;
    }
  };
  return (
    <li
      onClick={() => handleClick(item.name)}
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

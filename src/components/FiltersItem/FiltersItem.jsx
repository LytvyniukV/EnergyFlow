import css from "./FiltersItem.module.css";
export default function FiltersItem({ item, isExercise, setExerciseFilter }) {
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
    setExerciseFilter({
      [filter]: item.name,
    });

    isExercise(true);
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

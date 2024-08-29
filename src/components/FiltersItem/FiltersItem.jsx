import css from "./FiltersItem.module.css";
export default function FiltersItem({
  item,
  setMuscles,
  setEquipment,
  setBodyPart,
  isExercise,
  setFilter,
}) {
  const handleClick = (value) => {
    switch (item.filter) {
      case "Muscles":
        setMuscles(value);
        setBodyPart("");
        setEquipment("");
        isExercise(true);
        setFilter([]);
        break;
      case "Body parts":
        setBodyPart(value);
        setEquipment("");
        setMuscles("");
        isExercise(true);
        setFilter([]);
        break;
      case "Equipment":
        setEquipment(value);
        setBodyPart("");
        setMuscles("");
        isExercise(true);
        setFilter([]);
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

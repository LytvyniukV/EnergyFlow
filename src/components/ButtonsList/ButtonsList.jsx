import clsx from "clsx";
import css from "./ButtonsList.module.css";
import { useState } from "react";
export default function ButtonsList({ onClick, clearExercises }) {
  const [activeBtn, setActiveBtn] = useState("Muscles");

  const handleClick = (value) => {
    onClick(value);
    setActiveBtn(value);
    clearExercises([]);
  };
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <button
          onClick={() => handleClick("Muscles")}
          className={clsx(css.btn, activeBtn === "Muscles" && css.active)}
        >
          Muscles
        </button>
      </li>
      <li className={css.item}>
        <button
          onClick={() => handleClick("Body parts")}
          className={clsx(css.btn, activeBtn === "Body parts" && css.active)}
        >
          Body parts
        </button>
      </li>
      <li className={css.item}>
        <button
          onClick={() => handleClick("Equipment")}
          className={clsx(css.btn, activeBtn === "Equipment" && css.active)}
        >
          Equipment
        </button>
      </li>
    </ul>
  );
}

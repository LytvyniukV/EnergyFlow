import css from "./ExercisesItem.module.css";
import Icon from "../../shared/components/Icon/Icon";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/users/selectors.js";
import { toggleFavorites } from "../../redux/users/operations.js";

export default function ExercisesItem({
  item,
  openExerciseModal,
  setExerciseItem,
}) {
  const user = useSelector(selectUser);
  const favorites = user.favoriteExercises;
  const dispatch = useDispatch();

  const isFavorite = favorites?.some((exercise) => exercise.id === item._id);
  const handleToggleFavorites = () => {
    dispatch(toggleFavorites(item._id));
  };
  const openModal = () => {
    setExerciseItem(item);
    openExerciseModal(true);
  };
  return (
    <li className={css.item}>
      <div className={css.topWrap}>
        <p className={css.workout}>Workout</p>
        <div className={css.rateWrap}>
          <span className={css.rate}>{item.rating.toFixed(1)}</span>
          <Icon id="icon-star" width={18} height={18} className={css.icon} />
        </div>
        <button type="button" className={css.start} onClick={openModal}>
          Start{" "}
          <Icon
            id="icon-right-arrow"
            width={14}
            height={14}
            className={css.iconArrow}
          />
        </button>
      </div>
      <div className={css.mainWrap}>
        <div className={css.iconWrap}>
          <Icon
            id="icon-runing-man"
            width={24}
            height={24}
            className={css.iconMan}
          />
        </div>
        <span className={css.name}>{item.name}</span>
        <button
          type="button"
          className={css.favoriteBtn}
          onClick={handleToggleFavorites}
        >
          <Icon
            id="icon-heart"
            className={clsx(css.iconHeart, isFavorite && css.favorite)}
          />
        </button>
      </div>
      <div className={css.descriptionWrap}>
        <p className={css.text}>
          <span className={css.accent}>Burned calories:</span>{" "}
          {item.burnedCalories} / 3min
        </p>
        <p className={css.text}>
          <span className={css.accent}>Body part:</span> {item.bodyPart}
        </p>
        <p className={css.text}>
          <span className={css.accent}>Target:</span> {item.target}
        </p>
      </div>
    </li>
  );
}

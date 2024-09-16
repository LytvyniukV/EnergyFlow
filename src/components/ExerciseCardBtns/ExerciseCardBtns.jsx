import { useDispatch, useSelector } from "react-redux";
import css from "./ExerciseCardBtns.module.css";
import { selectUser } from "../../redux/users/selectors";
import Icon from "../../shared/components/Icon/Icon";
import clsx from "clsx";
import { toggleFavorites } from "../../redux/users/operations";
import { selectExerciseItem } from "../../redux/exercises/selectors";

export default function ExerciseCardBtns({
  isExerciseCard,
  isRating,
  isTraining,
}) {
  const user = useSelector(selectUser);
  const item = useSelector(selectExerciseItem);
  const dispatch = useDispatch();
  const isFavorite = user.favoriteExercises?.some(
    (exercise) => exercise.id === item._id
  );

  const manageFavorites = () => {
    dispatch(toggleFavorites(item._id));
  };
  const onRatingClick = () => {
    isRating(true);
    isExerciseCard(false);
  };
  const onTrainingClick = () => {
    isTraining(true);
    isExerciseCard(false);
  };
  return (
    <div className={css.btnsWrap}>
      <button type="button" className={css.btn} onClick={onTrainingClick}>
        Start training{" "}
        <Icon id="icon-dumbbell" width={18} height={18} className={css.icon} />
      </button>
      <button
        type="button"
        className={clsx(css.btn, css.favoritesBtn)}
        onClick={manageFavorites}
      >
        {isFavorite ? (
          <>
            Remove from favorites{" "}
            <Icon
              id="icon-trash"
              width={18}
              height={18}
              className={css.iconTrash}
            />
          </>
        ) : (
          <>
            Add to favorites{" "}
            <Icon
              id="icon-heart"
              width={18}
              height={18}
              className={css.iconHeart}
            />
          </>
        )}{" "}
      </button>
      <button type="button" className={css.btn} onClick={onRatingClick}>
        Give rating
      </button>
    </div>
  );
}

import { useDispatch, useSelector } from "react-redux";
import css from "./ExerciseCardBtns.module.css";
import { selectUser } from "../../redux/users/selectors";
import Icon from "../../shared/components/Icon/Icon";
import clsx from "clsx";
import { toggleFavorites } from "../../redux/users/operations";
import { Link } from "react-router-dom";

export default function ExerciseCardBtns({ item }) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const isFavorite = user.favoriteExercises?.some(
    (exercise) => exercise.id === item._id
  );

  const manageFavorites = () => {
    dispatch(toggleFavorites(item._id));
  };
  return (
    <div className={css.btnsWrap}>
      <button type="button" className={css.btn}>
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
      <Link type="button" className={css.btn} to={`/exercises/${item._id}`}>
        Give rating
      </Link>
    </div>
  );
}

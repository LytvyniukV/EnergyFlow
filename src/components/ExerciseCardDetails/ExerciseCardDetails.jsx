import { Link } from "react-router-dom";
import css from "./ExerciseCardDetails.module.css";
import ExerciseCardInfo from "../ExerciseCardInfo/ExerciseCardInfo";
import ExerciseCardBtns from "../ExerciseCardBtns/ExerciseCardBtns";
import { Rating } from "react-simple-star-rating";
import { useSelector } from "react-redux";
import { selectExerciseItem } from "../../redux/exercises/selectors";

export default function ExerciseCardDetails({
  isExerciseCard,
  isRating,
  isTraining,
}) {
  const item = useSelector(selectExerciseItem);
  return (
    <div className={css.mainWrap}>
      <div className={css.imgWrap}>
        <img src={item.gifUrl} alt={item.name} className={css.img} />
      </div>

      <div className={css.exercise}>
        <h3 className={css.name}>{item.name}</h3>
        <div className={css.rating}>
          {item.rating.toFixed(1)}{" "}
          <Rating initialValue={item.rating} readonly size={18} allowFraction />
          <Link className={css.link} to={`/exercises/${item._id}`}>
            Reviews ({item.reviews})
          </Link>
        </div>
        <ExerciseCardInfo />
        <p className={css.description}>{item.description}</p>
      </div>
      <ExerciseCardBtns
        isExerciseCard={isExerciseCard}
        isRating={isRating}
        isTraining={isTraining}
      />
    </div>
  );
}

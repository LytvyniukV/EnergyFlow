import { Link } from "react-router-dom";
import css from "./ExerciseCard.module.css";
import ExerciseCardInfo from "../ExerciseCardInfo/ExerciseCardInfo";
import ExerciseCardBtns from "../ExerciseCardBtns/ExerciseCardBtns";
import { Rating } from "react-simple-star-rating";
export default function ExerciseCard({ item }) {
  return (
    <div className={css.mainWrap}>
      <div className={css.imgWrap}>
        <img src={item.gifUrl} alt={item.name} className={css.img} />
      </div>

      <div className={css.exercise}>
        <h3 className={css.name}>{item.name}</h3>
        <div className={css.rating}>
          {item.rating} <Rating initialValue={item.rating} readonly size={18} />
          <Link className={css.link} to={`/exercises/${item._id}`}>
            Reviews ({item.reviews})
          </Link>
        </div>
        <ExerciseCardInfo item={item} />
        <p className={css.description}>{item.description}</p>
      </div>
      <ExerciseCardBtns item={item} />
    </div>
  );
}

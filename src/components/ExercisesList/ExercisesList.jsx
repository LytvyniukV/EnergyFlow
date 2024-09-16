import { Fade } from "react-awesome-reveal";
import ExercisesItem from "../ExercisesItem/ExercisesItem";
import css from "./ExercisesList.module.css";
import { useSelector } from "react-redux";
import { selectExercises } from "../../redux/exercises/selectors";

export default function ExercisesList({ openExerciseModal }) {
  const exercises = useSelector(selectExercises);
  return exercises.length > 0 ? (
    <ul className={css.list}>
      {exercises.map((item, ind) => {
        const delay = ((ind + 1) / 12 + 0.2) * 1000;

        return (
          <Fade delay={delay} duration={1800} key={item._id} triggerOnce={true}>
            <ExercisesItem item={item} openExerciseModal={openExerciseModal} />
          </Fade>
        );
      })}
    </ul>
  ) : (
    <p className={css.notFound}>
      Unfortunately, <span className={css.accent}>no results</span> were found.
      You may want to consider other search options to find the exercise you are
      looking for. Our range is wide and you have the opportunity to find more
      options that suit your needs.
    </p>
  );
}

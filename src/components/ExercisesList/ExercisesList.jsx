import { Fade } from "react-awesome-reveal";
import ExercisesItem from "../ExercisesItem/ExercisesItem";
import css from "./ExercisesList.module.css";

export default function ExercisesList({
  exercises,
  setExerciseItem,
  openExerciseModal,
}) {
  return (
    <ul className={css.list}>
      {exercises.map((item, ind) => {
        const delay = ((ind + 1) / 12 + 0.2) * 1000;

        return (
          <Fade delay={delay} duration={1800} key={item._id} triggerOnce={true}>
            <ExercisesItem
              item={item}
              openExerciseModal={openExerciseModal}
              setExerciseItem={setExerciseItem}
            />
          </Fade>
        );
      })}
    </ul>
  );
}

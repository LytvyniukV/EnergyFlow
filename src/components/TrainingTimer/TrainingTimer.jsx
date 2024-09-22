import { useSelector } from "react-redux";
import css from "./TrainingTimer.module.css";

import { selectExerciseItem } from "../../redux/exercises/selectors";
import Timer from "../Timer/Timer";
import { useState } from "react";

export default function TrainingTimer({ isTraining, isExerciseCard }) {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const item = useSelector(selectExerciseItem);
  const timer = new Date();
  timer.setMinutes(timer.getMinutes() + item.time);
  const burnedCalories = (item.burnedCalories / item.time / 60) * totalSeconds;

  const cancelTrain = () => {
    isTraining(false);
    isExerciseCard(true);
  };
  return (
    <div className={css.mainWrap}>
      <div className={css.imgWrap}>
        <img src={item.gifUrl} alt={item.name} className={css.img} />
      </div>
      <div className={css.timerWrap}>
        <Timer expiryTimestamp={timer} setSeconds={setTotalSeconds} />
        <button type="button" className={css.cancel} onClick={cancelTrain}>
          Cancel
        </button>
      </div>
    </div>
  );
}

import { useSelector } from "react-redux";
import css from "./TrainingTimer.module.css";

import { selectExerciseItem } from "../../redux/exercises/selectors";
import Timer from "../Timer/Timer";
import { useState } from "react";
export default function TrainingTimer({ isTraining, isExerciseCard }) {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const item = useSelector(selectExerciseItem);
  const time = new Date();
  time.setMinutes(time.getMinutes() + 3);

  return (
    <div className={css.mainWrap}>
      <div className={css.imgWrap}>
        <img src={item.gifUrl} alt={item.name} className={css.img} />
      </div>
      <Timer expiryTimestamp={time} setSeconds={setTotalSeconds} />
    </div>
  );
}

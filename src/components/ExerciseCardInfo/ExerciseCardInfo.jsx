import css from "./ExerciseCardInfo.module.css";
export default function ExerciseCardInfo({ item }) {
  return (
    <div className={css.info}>
      <div className={css.infoWrap}>
        <p className={css.infoName}>Target</p>
        <p className={css.infoValue}>{item.target}</p>
      </div>
      <div className={css.infoWrap}>
        <p className={css.infoName}>Body Part</p>
        <p className={css.infoValue}>{item.bodyPart}</p>
      </div>
      <div className={css.infoWrap}>
        <p className={css.infoName}>Equipment</p>
        <p className={css.infoValue}>{item.equipment}</p>
      </div>
      <div className={css.infoWrap}>
        <p className={css.infoName}>Popular</p>
        <p className={css.infoValue}>{item.popularity}</p>
      </div>
      <div className={css.infoWrap}>
        <p className={css.infoName}>Burned Calories</p>
        <p className={css.infoValue}>{item.burnedCalories}/3 min</p>
      </div>
    </div>
  );
}

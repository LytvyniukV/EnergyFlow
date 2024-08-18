import css from "./HomeImage.module.css";
export default function HomeImage() {
  return (
    <div className={css.wrap}>
      <ul className={css.list}>
        <li className={css.item}>#Sport</li>
        <li className={css.item}>#Healthy</li>
        <li className={css.item}>#Workout</li>
        <li className={css.item}>#Diet</li>
      </ul>
    </div>
  );
}

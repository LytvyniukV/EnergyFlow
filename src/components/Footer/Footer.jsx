import { NavLink } from "react-router-dom";
import css from "./Footer.module.css";
export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.navWrap}>
        <NavLink className={css.logo} to="/exercises">
          energy.flow
        </NavLink>
        <ul className={css.list}>
          <li>
            <NavLink className={css.link} to="/exercises">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={css.link} to="/favorites">
              Favorites
            </NavLink>
          </li>
          <li>
            <NavLink className={css.link} to="/tracker">
              Tracker
            </NavLink>
          </li>
        </ul>
      </div>
      <h2 className={css.title}>
        Transforming your <span className={css.accent}>body</span> shape with us
      </h2>
      <p className={css.text}>Energy Flow. All rights reserved</p>
    </footer>
  );
}

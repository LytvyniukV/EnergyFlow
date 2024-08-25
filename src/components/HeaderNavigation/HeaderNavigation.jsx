import { NavLink } from "react-router-dom";
import css from "./HeaderNavigation.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
export default function HeaderNavigation() {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <NavLink className={buildLinkClass} to="/exercises">
          Home
        </NavLink>
      </li>
      <li className={css.item}>
        <NavLink className={buildLinkClass} to="/favorites">
          Favorites
        </NavLink>
      </li>
      <li className={css.item}>
        <NavLink className={buildLinkClass} to="/tracker">
          Tracker
        </NavLink>
      </li>
    </ul>
  );
}

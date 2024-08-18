import { NavLink } from "react-router-dom";
import css from "./Logo.module.css";
export default function Logo() {
  return (
    <NavLink className={css.logo} to="/">
      energy.flow
    </NavLink>
  );
}

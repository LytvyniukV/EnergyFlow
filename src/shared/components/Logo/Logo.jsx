import { NavLink } from "react-router-dom";
import css from "./Logo.module.css";
export default function Logo({ redirect }) {
  return (
    <NavLink className={css.logo} to={redirect}>
      energy.flow
    </NavLink>
  );
}

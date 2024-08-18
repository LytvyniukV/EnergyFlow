import css from "./HomePage.module.css";
import Logo from "../../shared/components/Logo/Logo";
import HomeImage from "../../components/HomeImage/HomeImage";
import { NavLink } from "react-router-dom";

export default function HomePage() {
  return (
    <div className={css.wrap}>
      <div className={css.descriptionWrap}>
        <Logo />
        <p className={css.description}>
          Record daily trainings and water intake and track
        </p>
        <h1 className={css.title}>Trainings and water consumption tracker</h1>
        <div className={css.navWrap}>
          <NavLink className={css.signUp} to="/register">
            Try tracker
          </NavLink>
          <NavLink className={css.signIn} to="/login">
            Sign In
          </NavLink>
        </div>
      </div>
      <HomeImage />
    </div>
  );
}

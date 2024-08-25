import HomeImage from "../../../components/HomeImage/HomeImage";
import Logo from "../Logo/Logo";
import css from "./PageLayout.module.css";
export default function PageLayout({ children }) {
  return (
    <div className={css.wrap}>
      <div className={css.descriptionWrap}>
        <Logo redirect="/" />
        {children}
      </div>
      <HomeImage />
    </div>
  );
}

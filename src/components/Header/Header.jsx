import css from "./Header.module.css";
import Logo from "../../shared/components/Logo/Logo";
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";
import UserBar from "../UserBar/UserBar";

export default function Header() {
  return (
    <header className={css.header}>
      <Logo redirect="/exercises" />
      <HeaderNavigation />
      <UserBar />
    </header>
  );
}

import css from "./Header.module.css";
import Logo from "../../shared/components/Logo/Logo";
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";
import UserBar from "../UserBar/UserBar";
import MobileMenuModal from "../MobileMenuModal/MobileMenuModal";
import { useState } from "react";
import Icon from "../../shared/components/Icon/Icon";

export default function Header() {
  const [isMobileMenuModal, setIsMobileMenuModal] = useState(false);
  return (
    <header className={css.header}>
      <Logo redirect="/exercises" />
      <HeaderNavigation />
      <UserBar />
      <button
        className={css.burgerMenu}
        onClick={() => setIsMobileMenuModal(true)}
      >
        <Icon id="icon-mobile-menu-open" width={32} height={16} />
      </button>

      <MobileMenuModal
        isModal={isMobileMenuModal}
        onClose={setIsMobileMenuModal}
      />
    </header>
  );
}

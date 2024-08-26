import css from "./Header.module.css";
import Logo from "../../shared/components/Logo/Logo";
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";
import UserBar from "../UserBar/UserBar";
import AccountSettingsModal from "../AccountSettingsModal/AccountSettingsModal";
import LogoutModal from "../LogoutModal/LogoutModal";
import MobileMenuModal from "../MobileMenuModal/MobileMenuModal";
import { useState } from "react";
import WaterSettingsModal from "../WaterSettingsModal/WaterSettingsModal";
import Icon from "../../shared/components/Icon/Icon";

export default function Header() {
  const [isAccountSettingsModal, setIsAccountSettingsModal] = useState(false);
  const [isLogoutModal, setIsLogoutModal] = useState(false);
  const [isWaterSettingsModal, setIsWaterSettingsModal] = useState(false);
  const [isMobileMenuModal, setIsMobileMenuModal] = useState(false);
  return (
    <header className={css.header}>
      <Logo redirect="/exercises" />
      <HeaderNavigation />
      <UserBar
        isAccountSettingsModal={setIsAccountSettingsModal}
        isLogoutModal={setIsLogoutModal}
        isWaterSettingsModal={setIsWaterSettingsModal}
      />
      <button
        className={css.burgerMenu}
        onClick={() => setIsMobileMenuModal(true)}
      >
        <Icon id="icon-mobile-menu-open" width={32} height={16} />
      </button>
      <AccountSettingsModal
        isModal={isAccountSettingsModal}
        onClose={setIsAccountSettingsModal}
      />
      <WaterSettingsModal
        isModal={isWaterSettingsModal}
        onClose={setIsWaterSettingsModal}
      />
      <LogoutModal isModal={isLogoutModal} onClose={setIsLogoutModal} />
      <MobileMenuModal
        isModal={isMobileMenuModal}
        onClose={setIsMobileMenuModal}
      />
    </header>
  );
}

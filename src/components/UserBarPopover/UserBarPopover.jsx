import css from "./UserBarPopover.module.css";
import Icon from "../../shared/components/Icon/Icon";
import clsx from "clsx";
export default function UserBarPopover({
  closePopover,
  isLogoutModal,
  isAccountSettingsModal,
  isWaterSettingsModal,
}) {
  const openAccountSettingsModal = () => {
    isAccountSettingsModal(true);
    closePopover(false);
  };
  const openLogoutModal = () => {
    isLogoutModal(true);
    closePopover(false);
  };
  const openWaterSettingsModal = () => {
    isWaterSettingsModal(true);
    closePopover(false);
  };
  return (
    <div className={css.list}>
      <button className={css.btn} onClick={openAccountSettingsModal}>
        <Icon className={css.icon} id="settings" />
        Account settings
      </button>

      <button className={css.btn} onClick={openWaterSettingsModal}>
        <Icon className={css.icon} id="settings" />
        Water Settings
      </button>

      <button className={clsx(css.btn, css.logout)} onClick={openLogoutModal}>
        <Icon className={clsx(css.icon, css.logoutIcon)} id="logOut" />
        Log out
      </button>
    </div>
  );
}

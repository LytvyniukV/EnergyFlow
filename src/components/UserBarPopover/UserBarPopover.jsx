import css from "./UserBarPopover.module.css";
import Icon from "../../shared/components/Icon/Icon";
export default function UserBarPopover({ closePopover }) {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <button className={css.btn}>
          <Icon className={css.icon} id="settings" />
          Account settings
        </button>
      </li>
      <li className={css.item}>
        <button className={css.btn}>
          <Icon className={css.icon} id="settings" />
          Water Settings
        </button>
      </li>
      <li className={css.item}>
        <button className={css.btn}>
          <Icon className={css.icon} id="logOut" />
          Log out
        </button>
      </li>
    </ul>
  );
}

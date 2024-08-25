import css from "./Layout.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../../redux/users/selectors";

export default function Layout({ children }) {
  return <div className={css.container}>{children}</div>;
}

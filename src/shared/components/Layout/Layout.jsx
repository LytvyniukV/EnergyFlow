import css from "./Layout.module.css";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../../redux/users/selectors";

export default function Layout({ children }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.container}>
      {isLoggedIn && <Header />}
      <main>{children}</main>
      {isLoggedIn && <Footer />}
    </div>
  );
}

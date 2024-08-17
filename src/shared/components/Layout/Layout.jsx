import css from "./Layout.module.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

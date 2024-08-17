import css from "./Layout.module.css";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";

export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

import css from "./Layout.module.css";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import css from "./PrivatePageLayout.module.css";
export default function PrivatePageLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

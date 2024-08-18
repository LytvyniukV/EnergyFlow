import css from "./SignInPage.module.css";
import HomeImage from "../../components/HomeImage/HomeImage";
import SignInForm from "../../components/SignInForm/SignInForm";
import Logo from "../../shared/components/Logo/Logo";

export default function SignInPage() {
  return (
    <div className={css.mainWrap}>
      <div className={css.formWrap}>
        <Logo />
        <SignInForm />
      </div>
      <HomeImage />
    </div>
  );
}

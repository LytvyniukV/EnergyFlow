import css from "./SignUpPage.module.css";
import HomeImage from "../../components/HomeImage/HomeImage";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import Logo from "../../shared/components/Logo/Logo";

export default function SignUpPage() {
  return (
    <div className={css.mainWrap}>
      <div className={css.formWrap}>
        <Logo />
        <SignUpForm />
      </div>
      <HomeImage />
    </div>
  );
}

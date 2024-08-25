import css from "./SignInPage.module.css";
import PageLayout from "../../shared/components/PageLayout/PageLayout";
import SignInForm from "../../components/SignInForm/SignInForm";
import { NavLink } from "react-router-dom";

export default function SignInPage() {
  return (
    <PageLayout>
      <SignInForm />
      <p className={css.text}>
        Don't have account?{" "}
        <NavLink className={css.link} to="/register">
          Sign Up
        </NavLink>
      </p>
    </PageLayout>
  );
}

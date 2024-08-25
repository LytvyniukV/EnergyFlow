import css from "./SignUpPage.module.css";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import PageLayout from "../../shared/components/PageLayout/PageLayout";
import { NavLink } from "react-router-dom";

export default function SignUpPage() {
  return (
    <PageLayout>
      <SignUpForm />
      <p className={css.text}>
        Already have account?{" "}
        <NavLink className={css.link} to="/login">
          Sign In
        </NavLink>
      </p>
    </PageLayout>
  );
}

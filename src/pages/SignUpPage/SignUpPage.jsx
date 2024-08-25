import css from "./SignUpPage.module.css";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import PageLayout from "../../shared/components/PageLayout/PageLayout";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function SignUpPage() {
  const [isEmailSent, setIsEmailSent] = useState(false);
  return (
    <PageLayout>
      <h2 className={css.title}>Sign up</h2>
      {!isEmailSent ? (
        <>
          <SignUpForm isEmailSent={setIsEmailSent} />
          <p className={css.text}>
            Already have account?{" "}
            <NavLink className={css.link} to="/login">
              Sign In
            </NavLink>
          </p>
        </>
      ) : (
        <div className={css.notifyWrap}>
          <p className={css.textEmail}>
            Please, check your email and follow the instructions
          </p>
          <NavLink to="/register" className={css.btn}>
            OK
          </NavLink>
        </div>
      )}
    </PageLayout>
  );
}

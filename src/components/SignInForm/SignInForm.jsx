import css from "./SignInForm.module.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Icon from "../../shared/components/Icon/Icon";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/users/operations";
import toast from "react-hot-toast";
import { selectUser } from "../../redux/users/selectors.js";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit
const schema = yup.object().shape({
  email: yup
    .string()
    .email("Must be valid email")
    .required("Email is required"),
  password: yup
    .string()
    .matches(passwordRules, {
      message: "Please create a stronger password",
    })
    .required("Password is required"),
});
export default function SignInForm() {
  const user = useSelector(selectUser);
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: user.email || "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(login(data))
      .unwrap()
      .then(setIsEmailSent(true))
      .catch((error) => {
        if (error.message === "Please, verify your email") {
          toast.error(error.message);
        } else {
          toast.error("Email or password is wrong");
        }
      });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      <div className={css.inputsContainer}>
        <div className={css.labelWrap}>
          <label className={css.label}>Email</label>
          <input
            className={clsx(css.input, errors.email && css.errorInput)}
            placeholder="Enter your email"
            type="email"
            autoComplete="off"
            {...register("email")}
          />
        </div>
        {errors.email && (
          <p className={css.errorText}>{errors.email.message}</p>
        )}
        <div className={css.labelWrap}>
          <label className={css.label}>Password</label>
          <div className={css.inputIconWrap}>
            <input
              autoComplete="off"
              className={clsx(css.input, errors.password && css.errorInput)}
              placeholder="Enter your password"
              type={isPasswordHidden ? "password" : "text"}
              {...register("password")}
            />
            {isPasswordHidden ? (
              <button
                type="button"
                className={css.iconBtn}
                onClick={() => setIsPasswordHidden(false)}
              >
                <Icon id="eye" className={css.icon} />
              </button>
            ) : (
              <button
                type="button"
                className={css.iconBtn}
                onClick={() => setIsPasswordHidden(true)}
              >
                <Icon id={"eyeOff"} className={css.icon} />
              </button>
            )}
          </div>
          {errors.password && (
            <p className={css.errorText}>{errors.password.message}</p>
          )}
        </div>
      </div>
      <p className={css.text}>
        <NavLink className={css.link} to="/reset-token">
          Forgot password?
        </NavLink>
      </p>
      <button className={css.submitBtn} type="submit">
        Sign In
      </button>
    </form>
  );
}

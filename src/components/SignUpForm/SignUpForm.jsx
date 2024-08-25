import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import css from "./SignUpForm.module.css";
import { useForm } from "react-hook-form";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Icon from "../../shared/components/Icon/Icon";
import { useDispatch } from "react-redux";
import { register as registerUser } from "../../redux/users/operations.js";
import toast from "react-hot-toast";
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
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

export default function SignUpForm() {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const user = { email: data.email, password: data.password };
    dispatch(registerUser(user))
      .unwrap()
      .then()
      .catch(() => toast.error("Email is already exist"));
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
        <div className={css.labelWrap}>
          <label className={css.label}>Repeat password</label>
          <div className={css.inputIconWrap}>
            <input
              autoComplete="off"
              className={clsx(
                css.input,
                errors.confirmPassword && css.errorInput
              )}
              placeholder="Repeat your password"
              type={isPasswordHidden ? "password" : "text"}
              {...register("confirmPassword")}
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
          {errors.confirmPassword && (
            <p className={css.errorText}>{errors.confirmPassword.message}</p>
          )}
        </div>
      </div>

      <button className={css.submitBtn} type="submit">
        Sign Up
      </button>
    </form>
  );
}

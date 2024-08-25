import css from "./ResetPasswordPage.module.css";
import PageLayout from "../../shared/components/PageLayout/PageLayout";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import clsx from "clsx";
import { yupResolver } from "@hookform/resolvers/yup";
import Icon from "../../shared/components/Icon/Icon";
import { useState } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import api from "../../axiosApi/axios";
import toast from "react-hot-toast";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit
const schema = yup.object().shape({
  password: yup
    .string()
    .matches(passwordRules, {
      message: "Please create a stronger password",
    })
    .required("Password is required"),
});
export default function ResetPasswordPage() {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    api
      .post("/auth/reset-password", {
        token,
        password: data.password,
      })
      .then(() => {
        toast.success("Password was changed");
        setIsSuccess(true);
      })
      .catch(() => toast.error("Something went wrong, try again later"));
  };

  return (
    <PageLayout>
      {isSuccess ? (
        <Navigate to="/login" />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
          <div className={css.inputsContainer}>
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

          <button className={css.submitBtn} type="submit">
            Save
          </button>
        </form>
      )}
    </PageLayout>
  );
}

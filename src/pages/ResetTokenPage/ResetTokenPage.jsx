import css from "./ResetTokenPage.module.css";
import PageLayout from "../../shared/components/PageLayout/PageLayout";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import clsx from "clsx";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import api from "../../axiosApi/axios";
import toast from "react-hot-toast";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Must be valid email")
    .required("Email is required"),
});
export default function ResetTokenPage() {
  const [isSendEmail, setIsSendEmail] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    api
      .post("/auth/reset-token", data)
      .then(() => setIsSendEmail(true))
      .catch(() => toast.error("Email not found"));
  };
  return (
    <PageLayout>
      {!isSendEmail ? (
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
          </div>
          <button className={css.submitBtn} type="submit">
            Send
          </button>
        </form>
      ) : (
        <div className={css.textWrap}>
          <p className={css.text}>
            Instructions were successfully sent to your email address
          </p>
        </div>
      )}
    </PageLayout>
  );
}

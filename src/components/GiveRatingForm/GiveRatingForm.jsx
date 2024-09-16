import { useForm } from "react-hook-form";
import css from "./GiveRatingForm.module.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Rating } from "react-simple-star-rating";
import { useState } from "react";
import clsx from "clsx";

const schema = yup.object().shape({
  comment: yup.string().required("Comment is required"),
});
export default function GiveRatingForm({ isRating, isExerciseCard }) {
  const [rating, setRating] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      comment: "",
    },
    resolver: yupResolver(schema),
  });
  const handleRating = (rate) => {
    setRating(rate);
  };
  const onSubmit = (data) => {
    console.log({ rating: rating, comment: data.comment });
    console.log(rating);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <span>{rating}</span>
        <Rating
          onClick={handleRating}
          initialValue={rating}
          transition
          allowFraction
        />
      </div>
      <div>
        <textarea
          placeholder="Your comment"
          {...register("comment")}
          className={clsx(css.comment, errors.comment && css.errorInput)}
        />
        {errors.comment && (
          <p className={css.error}>{errors.comment.message}</p>
        )}
      </div>
      <button type="submit">send</button>
      <button
        type="button"
        onClick={() => {
          isRating(false);
          isExerciseCard(true);
        }}
      >
        cancel
      </button>
    </form>
  );
}

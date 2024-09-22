import { useForm } from "react-hook-form";
import css from "./GiveRatingForm.module.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Rating } from "react-simple-star-rating";
import { useState } from "react";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { selectExerciseItem } from "../../redux/exercises/selectors";
import { leaveReview } from "../../redux/exercises/operations";
import toast from "react-hot-toast";

const schema = yup.object().shape({
  comment: yup.string().required("Comment is required"),
});
export default function GiveRatingForm({ isRating, isExerciseCard }) {
  const exercise = useSelector(selectExerciseItem);
  const dispatch = useDispatch();
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
  const cancelRating = () => {
    isRating(false);
    isExerciseCard(true);
  };
  const onSubmit = (data) => {
    dispatch(
      leaveReview({ rating: rating, comment: data.comment, id: exercise._id })
    )
      .unwrap()
      .then(() => {
        toast.success("Thank you for your review");
        cancelRating();
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      <p className={css.title}>Rating</p>
      <div className={css.rateWrap}>
        <span className={css.rate}>{rating.toFixed(1)}</span>
        <Rating
          onClick={handleRating}
          initialValue={rating}
          transition
          allowFraction
          size={24}
        />
      </div>
      <div className={css.commentWrap}>
        <textarea
          placeholder="Your comment"
          {...register("comment")}
          className={clsx(css.comment, errors.comment && css.errorInput)}
        />
        {errors.comment && (
          <p className={css.error}>{errors.comment.message}</p>
        )}
      </div>
      <div className={css.btnWrap}>
        <button type="submit" className={clsx(css.btn, css.sendBtn)}>
          Send
        </button>
        <button
          type="button"
          onClick={cancelRating}
          className={clsx(css.btn, css.cancelBtn)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

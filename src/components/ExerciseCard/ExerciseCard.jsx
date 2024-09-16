import { useState } from "react";
import ExerciseCardDetails from "../ExerciseCardDetails/ExerciseCardDetails";
import GiveRatingForm from "../GiveRatingForm/GiveRatingForm";
import TrainingTimer from "../TrainingTimer/TrainingTimer";
import css from "./ExerciseCard.module.css";
export default function ExerciseCard() {
  const [isExerciseCard, setIsExerciseCard] = useState(true);
  const [isRating, setIsRating] = useState(false);
  const [isTraining, setIsTraining] = useState(false);
  return (
    <>
      {isExerciseCard && (
        <ExerciseCardDetails
          isExerciseCard={setIsExerciseCard}
          isRating={setIsRating}
          isTraining={setIsTraining}
        />
      )}
      {isRating && (
        <GiveRatingForm
          isExerciseCard={setIsExerciseCard}
          isRating={setIsRating}
        />
      )}
      {isTraining && (
        <TrainingTimer
          isTraining={setIsTraining}
          isExerciseCard={setIsExerciseCard}
        />
      )}
    </>
  );
}

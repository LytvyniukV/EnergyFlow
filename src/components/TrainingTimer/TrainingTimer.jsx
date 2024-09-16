import css from "./TrainingTimer.module.css";
export default function TrainingTimer({ isTraining, isExerciseCard }) {
  return (
    <button
      type="button"
      onClick={() => {
        isTraining(false);
        isExerciseCard(true);
      }}
    >
      cancel
    </button>
  );
}

import Modal from "../../shared/components/Modal/Modal";
import ExerciseCard from "../ExerciseCard/ExerciseCard";
import css from "./ExerciseModal.module.css";

export default function ExerciseModal({ isModal, closeModal }) {
  return (
    <Modal isModal={isModal} onClose={closeModal}>
      <ExerciseCard />
    </Modal>
  );
}

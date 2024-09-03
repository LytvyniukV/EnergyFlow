import { useEffect } from "react";
import Modal from "../../shared/components/Modal/Modal";
import css from "./ExerciseModal.module.css";
import { useState } from "react";
import api from "../../axiosApi/axios";
export default function ExerciseModal({ isModal, closeModal, item }) {
  const [exercise, setExercise] = useState({});
  // useEffect(() => {
  //   const getExercise = async () => {
  //     const {
  //       data: { data },
  //     } = await api.get(`/exercises/${item}`);
  //     console.log(data);
  //   };
  //   getExercise();
  // }, [item]);
  return (
    <Modal isModal={isModal} onClose={closeModal}>
      <div>
        <img src={item.gifUrl} alt="" />
      </div>
    </Modal>
  );
}

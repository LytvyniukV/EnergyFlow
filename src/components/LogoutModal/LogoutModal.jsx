import Modal from "../../shared/components/Modal/Modal";
import css from "./LogoutModal.module.css";
export default function LogoutModal({ isModal, onClose }) {
  return (
    <Modal isModal={isModal} onClose={onClose}>
      <div>logout</div>
    </Modal>
  );
}

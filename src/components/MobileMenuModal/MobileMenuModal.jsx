import Modal from "../../shared/components/Modal/Modal";
import css from "./MobileMenuModal.module.css";
export default function MobileMenuModal({ isModal, onClose }) {
  return (
    <Modal isModal={isModal} onClose={onClose}>
      <div>mobile menu</div>
    </Modal>
  );
}

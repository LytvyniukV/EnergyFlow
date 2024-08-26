import css from "./AccountSettingsModal.module.css";
import Modal from "../../shared/components/Modal/Modal";
export default function AccountSettingsModal({ isModal, onClose }) {
  return (
    <Modal isModal={isModal} onClose={onClose}>
      <div className={css.div}>settings</div>
    </Modal>
  );
}

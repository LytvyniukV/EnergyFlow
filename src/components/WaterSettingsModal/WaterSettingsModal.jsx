import Modal from "../../shared/components/Modal/Modal";
import css from "./WaterSettingsModal.module.css";
export default function WaterSettingsModal({ isModal, onClose }) {
  return (
    <Modal isModal={isModal} onClose={onClose}>
      <div>water settings</div>
    </Modal>
  );
}

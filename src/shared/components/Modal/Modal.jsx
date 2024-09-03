import ReactModal from "react-modal";
import css from "./Modal.module.css";
import { createPortal } from "react-dom";
import Icon from "../Icon/Icon";
ReactModal.setAppElement("body");

export default function Modal({ children, isModal, onClose }) {
  const closeModal = () => {
    onClose(false);
  };
  return createPortal(
    <ReactModal
      isOpen={isModal}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      className={css.Modal}
      overlayClassName={css.Overlay}
    >
      <div className={css.modal}>
        {" "}
        <button type="button" className={css.closeBtn} onClick={closeModal}>
          <Icon
            id="icon-close-modal"
            width={28}
            height={28}
            className={css.icon}
          />
        </button>
        {children}
      </div>
    </ReactModal>,
    document.body
  );
}

import ReactModal from "react-modal";
import Button from "../Button/Button";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { ModalState, modalActions } from "@/store/modal";
import styled from "styled-components";

const MessageDiv = styled.div`
  padding: 30px;
`;

const Modal = () => {
  const { isOpen, message } = useSelector<RootState, ModalState>(
    (state) => state.modal
  );
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(modalActions.close());
  };
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      parentSelector={() => document.querySelector("#modal")!}
      style={{
        overlay: {
          zIndex: 11,
        },
        content: {
          height: 200,
          width: 400,
          zIndex: 12,
          inset: "50% 0 0 50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <MessageDiv>{message}</MessageDiv>
      <Button onClick={closeModal}>확인</Button>
    </ReactModal>
  );
};

export default Modal;

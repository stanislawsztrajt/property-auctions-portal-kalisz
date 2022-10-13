import React, { ReactNode } from "react";
import { FCC } from "utils/types";
import { useHandleModalShow } from "./handle-modal-context";

interface Props {
  Modal: ReactNode;
  Button: ReactNode;
}

const HandleModal: FCC<Props> = ({ Modal, Button }: Props) => {
  const { isModalShow } = useHandleModalShow();

  return (
    <>
      {isModalShow && (
        <div className="fixed top-0 left-0 z-10 w-screen h-screen bg-black opacity-50"></div>
      )}
      {isModalShow ? <>{Modal}</> : <>{Button}</>}
    </>
  );
};

export default HandleModal;

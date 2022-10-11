import React, { ReactNode } from 'react'
import { FCC } from 'utils/types';
import { useHandleModalShow } from './handle-modal-context';

interface Props {
  Modal: ReactNode;
  Button: ReactNode;
}

const HandleModal: FCC<Props> = ({ Modal, Button }: Props) => {
  const { isModalShow } = useHandleModalShow()

  return(
    <>
      {
        isModalShow ? (
          <>{ Modal }</>
        ) : (
          <>{ Button }</>
        )
      }
    </>
  )
}

export default HandleModal
import React from "react";
import { createContext, ReactNode, useContext, useState } from "react";
import { FCC } from "utils/types";

interface IhandleModalContext {
  isModalShow: boolean;
  setIsModalShow: (isModalShow: boolean) => void;
}

const HandleModalShow = createContext<IhandleModalContext>({
  isModalShow: false,
  setIsModalShow: (isModalShow: boolean) => {
    console.log(isModalShow);
  },
});

export const useHandleModalShow: () => IhandleModalContext = () => {
  return useContext(HandleModalShow);
};

interface Props {
  children: ReactNode;
}

export const HandleModalContext: FCC<Props> = ({ children }: Props) => {
  const [isModalShow, setIsModal] = useState<boolean>(false);

  const setIsModalShow = (isModalShow: boolean) => {
    setIsModal(isModalShow);
  };

  return (
    <HandleModalShow.Provider value={{ isModalShow, setIsModalShow }}>
      {children}
    </HandleModalShow.Provider>
  );
};

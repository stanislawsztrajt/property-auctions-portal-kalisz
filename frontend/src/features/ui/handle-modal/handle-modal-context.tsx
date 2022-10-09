import React from 'react'
import { Context, createContext, ReactNode, useContext, useState } from "react";
import { FCC } from "utils/types";

interface IhandleModalContext {
  isModalShow?: boolean
  setIsModalShow?: React.Dispatch<React.SetStateAction<boolean>>
}

const HandleModalShow: Context<IhandleModalContext> = createContext({});

export const useHandleModalShow: () => IhandleModalContext = () =>{
  return useContext(HandleModalShow)
}

interface Props {
  children: ReactNode
}

export const HandleModalContext: FCC<Props> = ({ children }: Props) =>{
  const [isModalShow, setIsModalShow] = useState<boolean>(false);


  return(
    <HandleModalShow.Provider value={{ isModalShow, setIsModalShow }}>
      { children }
    </HandleModalShow.Provider>
  )
}
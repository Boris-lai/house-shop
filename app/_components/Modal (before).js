// "use client";
import { createContext, useContext, cloneElement, useState } from "react";
import { createPortal } from "react-dom";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);

  if (name !== openName) return null;

  return createPortal(
    <div className="fixed top-0 left-0 w-full h-screen bg-stone-600 backdrop-opacity-40 z-50">
      <div className="fixed top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-[9px] [box-shadow:0_2.4rem_3.2rem_rgba(0,_0,_0,_0.12)] px-16 py-12">
        <div>{cloneElement(children)}</div>
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;

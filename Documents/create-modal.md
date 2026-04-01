# how to create modal

`app.jsx`
```jsx
import { Children, useState } from "react";
import Modal from "./component/Modal";

const App = () => {
  const UseModal = ()=>{
    const [isModalOpen, setModalOpen] = useState(false);
    const OpenModal = ()=> setModalOpen(true);
    const CloseModal = ()=> setModalOpen(false);

    return {isModalOpen, OpenModal, CloseModal}
  }

  const { isModalOpen, OpenModal, CloseModal} = UseModal();
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-sm w-full">
        {/* Card Content */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Hello There!
        </h2>
        <p className="text-gray-600 mb-6">
          This is a simple card built with React and styled beautifully with Tailwind CSS. It's a great starting point for any UI component you want to create.
        </p>
        
        {/* Open Button */}
        <button
          onClick={OpenModal}
          className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-xl hover:bg-blue-700 transition duration-300 ease-in-out shadow-md"
        >
          Open
        </button>
      </div>
      {isModalOpen && 
        <Modal onclose={CloseModal}>
          <h3>update somthing</h3>
          <div className="mt-1">
            <label htmlFor="name">Name</label>
          </div>
          <input type="text" name="text" className="border border-gray-400 px-2 transition-all duration-200  focus:ring-3 focus:ring-blue-500/50 outline-0 py-1" id="" />
        </Modal>}
    </div>
  );
};

export default App;
```

### create modal.jsx
`modal.jsx`
```jsx
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ children, onclose}) => {
  const [isVisible, setVisible] = useState(false);
  useEffect(()=>{
    setVisible(true)
  },[])

  const handleClose = ()=>{
    setVisible(false);
    setTimeout(onclose, 300);
  }
  
  return (
      createPortal(
        <div>
          <div id="backdrop" className={`h-[100%] w-[100%] bg-black/60 fixed inset-0 transition-all duration-300
            ${isVisible ? "opacity-100" : "opacity-0"}
            `}
            onClick={handleClose}
          ></div>
          <div id="modal_content" 
          className={`absolute left-1/2 top-1/2 transition-all duration-300 p-5 bg-white transform -translate-x-1/2 -translate-y-1/2 origin-right ${isVisible ? "translate-y-0 scale-100 opacity-100":"-translate-y-20 scale-95 opacity-0"}`}>
            {children}
          </div>
        </div>,document.body
      )
  );
};

export default Modal;
```
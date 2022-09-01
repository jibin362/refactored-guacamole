import React from 'react';
import { useModalStore } from '../stores/modalStore';

function AddButton() {
  const { toggleShow } = useModalStore((state) => state);

  return (
    <button
      className="font-bold px-5 py-3 bg-slate-100 rounded-btn"
      onClick={toggleShow}
    >
      +Add
    </button>
  );
}

export default AddButton;

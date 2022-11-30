import React from 'react'
import { useContext } from 'react';
import PricingContext from '../../Contexts/PricingContext';

const PricingModal = () => {
  const {
    isModalOpen,
    setIsModalOpen
  } = useContext(PricingContext);

  if (isModalOpen) {
    return (
      <div style={{ position: "fixed", height: "100vh", width: "100vw", zIndex: "100", background: "rgb(0 0 0 / 32%)", top: "0", left: "0" }}>
        Modal
      </div>
    )
  }

  return <></>
}

export default PricingModal;
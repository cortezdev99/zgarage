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
      <div>
        Modal
      </div>
    )
  }

  return <></>
}

export default PricingModal;
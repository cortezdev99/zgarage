import { useState } from 'react'
import PricingContext from '../Contexts/PricingContext';

const PricingProvider = (props) => {
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const [ isEditing, setIsEditing ] = useState(false);
  const [ docToUpdate, setDocToUpdate ] = useState(null);

  const state = {
    isModalOpen,
    setIsModalOpen,
    isEditing,
    setIsEditing,
    docToUpdate,
    setDocToUpdate
  }

  return (
    <PricingContext.Provider value={state}>
      {props.children}
    </PricingContext.Provider>
  )
}

export default PricingProvider;
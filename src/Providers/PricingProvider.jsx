import { useState } from 'react'
import PricingContext from '../Contexts/PricingContext';

const PricingProvider = (props) => {
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const [ isEditing, setIsEditing ] = useState(false);
  const [ docToUpdate, setDocToUpdate ] = useState();
  const [ loading, setLoading ] = useState(false);

  const state = {
    isModalOpen,
    setIsModalOpen,
    isEditing,
    setIsEditing,
    docToUpdate,
    setDocToUpdate,
    loading,
    setLoading
  }

  return (
    <PricingContext.Provider value={state}>
      {props.children}
    </PricingContext.Provider>
  )
}

export default PricingProvider;
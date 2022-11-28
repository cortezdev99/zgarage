import { useState } from 'react'
import PricingContext from '../Contexts/PricingContext';

const PricingProvider = (props) => {
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const [ breed, setBreed ] = useState("");
  const [ bathAndBrushPrice, setBathAndBrushPrice ] = useState("");
  const [ fullServiceGroomPrice, setFullServiceGroomPrice ] = useState("");

  const state = {
    isModalOpen,
    setIsModalOpen,
    breed,
    setBreed,
    bathAndBrushPrice,
    setBathAndBrushPrice,
    fullServiceGroomPrice,
    setFullServiceGroomPrice
  }

  return (
    <PricingContext.Provider value={state}>
      {props.children}
    </PricingContext.Provider>
  )
}

export default PricingProvider;
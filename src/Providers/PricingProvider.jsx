import { useState } from 'react'
import PricingContext from '../Contexts/PricingContext';

const PricingProvider = (props) => {
  const [ breed, setBreed ] = useState("");
  const [ bathAndBrushPrice, setBathAndBrushPrice ] = useState("");
  const [ fullServiceGroomPrice, setFullServiceGroomPrice ] = useState("");

  const data = {
    breed,
    setBreed,
    bathAndBrushPrice,
    setBathAndBrushPrice,
    fullServiceGroomPrice,
    setFullServiceGroomPrice
  }

  return (
    <PricingContext.Provider value={data}>
      {props.children}
    </PricingContext.Provider>
  )
}

export default PricingProvider;
import React, { useState, useEffect } from 'react'
import { useContext } from 'react';
import PricingContext from '../../Contexts/PricingContext';
import Loading from '../Utilities/Loading';

const PricingModal = () => {
  const [ loading, setLoading ] = useState(false);
  const [ breed, setBreed ] = useState("");
  const [ bathAndBrushPrice, setBathAndBrushPrice ] = useState("");
  const [ fullServiceGroomPrice, setFullServiceGroomPrice ] = useState("");

  const {
    isModalOpen,
    isEditing,
    docToUpdate
  } = useContext(PricingContext);

  useEffect(() => {
    // if (isEditing && !loading) {
    //   return setLoading(true);
    // } else if (isEditing && loading) {
      // const {
      //   breed,
      //   bathAndBrushPrice,
      //   fullServiceGroomPrice
      // } = docToUpdate.data();

      // setBreed(breed);
      // setBathAndBrushPrice(bathAndBrushPrice);
      // setFullServiceGroomPrice(fullServiceGroomPrice);
      // return setLoading(false);
    // } else {
    //   return;
    // }

    if (isEditing) {
      setLoading(true);

      setTimeout(() => {
        const {
          breed,
          bathAndBrushPrice,
          fullServiceGroomPrice
        } = docToUpdate.data();
  
        setBreed(breed);
        setBathAndBrushPrice(bathAndBrushPrice);
        setFullServiceGroomPrice(fullServiceGroomPrice);
  
        // return setLoading(false);
      }, 500)
    }
  }, [ isEditing ])

  if (isModalOpen) {
    return (
      <div style={{ position: "fixed", height: "100vh", width: "100vw", zIndex: "100", background: "rgb(0 0 0 / 32%)", top: "0", left: "0", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: "80%", height: "70%", backgroundColor: "#FFF", borderRadius: "10px" }}>
          {
            loading ? (
              <div>
                <div>
                  loading
                </div>

                <Loading />
              </div>
            ) : (
              <div>
                not loading...
              </div>
            )
          }
        </div>
      </div>
    )
  }

  return <></>
}

export default PricingModal;
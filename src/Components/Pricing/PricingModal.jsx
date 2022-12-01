import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    setIsModalOpen,
    isEditing,
    setIsEditing,
    docToUpdate,
    setDocToUpdate
  } = useContext(PricingContext);

  useEffect(() => {
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
  
        return setLoading(false);
      }, 500)
    }

    return;
  }, [ isEditing ])

  const handleClosingModal = () => {
    if (isEditing) {
      setDocToUpdate(null);
      setIsEditing(false);
      setIsModalOpen(false);

      setTimeout(() => {
        const bodyElem = document.getElementById("body");
        
        return bodyElem.classList.remove("modal-open-disable-body-scroll");
      }, 500)
    }
  }

  if (isModalOpen) {
    return (
      <div style={{ position: "fixed", height: "100vh", width: "100vw", zIndex: "100", background: "rgb(0 0 0 / 32%)", top: "0", left: "0", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: "80%", height: "70%", backgroundColor: "#F1F1F1", borderRadius: "10px" }}>
          {
            loading ? (
              <div style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly" }}>
                <div style={{ fontSize: "24px", color: "#264a73", fontWeight: "600", letterSpacing: "0.75px" }}>
                  Loading...
                </div>

                <div>
                  <Loading />
                </div>
              </div>
            ) : (
              <div style={{ overflowY: "auto" }}>
                <div style={{ fontSize: "18px", padding: "20px", textAlign: "center", color: "#264a73", letterSpacing: "0.75px", fontWeight: "600", display: "flex", alignItems: "center", justifyContent: "center", lineHeight: "25px", position: "relative", borderBottom: "2px solid #264a73", backgroundColor: "#FFF", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}>
                  {
                    isEditing ? "Edit Service" : "New Service"
                  }

                  <div 
                    style={{ fontSize: "20px", position: "absolute", top: "18px", right: "20px", cursor: "pointer" }}
                    onClick={handleClosingModal}
                  >
                    <FontAwesomeIcon icon={['fas', 'xmark']} />
                  </div>
                </div>
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
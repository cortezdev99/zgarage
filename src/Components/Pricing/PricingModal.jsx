import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getDoc, setDoc, updateDoc, doc, addDoc, collection } from 'firebase/firestore';
import React, { useState, useEffect } from 'react'
import { useContext } from 'react';
import PricingContext from '../../Contexts/PricingContext';
import { db } from '../Config/firebase';
import Loading from '../Utilities/Loading';

const PricingModal = () => {
  const [ breed, setBreed ] = useState("");
  const [ bathAndBrush, setBathAndBrush ] = useState("");
  const [ fullServiceGroom, setFullServiceGroom ] = useState("");
  const [ loadingSubmission, setLoadingSubmission ] = useState(false);
  const [ error, setError ] = useState(false);
  
  const {
    isModalOpen,
    setIsModalOpen,
    isEditing,
    setIsEditing,
    docToUpdate,
    setDocToUpdate,
    loading,
    setLoading
  } = useContext(PricingContext);

  useEffect(() => {
    // if admin is editing a document, and the document has been passed to pricingModal provider, we need get the document data, and update state respectively
    if (isEditing && docToUpdate) {
      // deconstructing document recieved from pricing modal provider
      const {
        breed,
        bathAndBrush,
        fullServiceGroom
      } = docToUpdate.data();
      
      // updating state respectively with deconstructed document data
      setBreed(breed);
      setBathAndBrush(bathAndBrush);
      setFullServiceGroom(fullServiceGroom);
      setLoading(false);
    }
    // declaring docToUpdate as a dependancy for useEffect hook
  }, [docToUpdate])

  useEffect(() => {
    // if admin is not editing a document and the modal is open, set loading to false as there is no data being fetched.  
    if (!isEditing && isModalOpen) {
      // admin is not editing document
      return setLoading(false);
    }
    // declaring isEditing as a dependancy for useEffect hook
  }, [ isEditing ])

  useEffect(() => {
    // if loading submission state has updated, continue with form submission -- this is indicate to user this process may take time
    if (loadingSubmission) {
      // loading submission state has been updated, form submission begins
      handleSubmittingForm();
    }
    // declaring loadingSubmission as a dependency for useEffect hook
  }, [loadingSubmission])

  const handleClosingModal = () => {
    // reset modal states, and provider states
    setBreed("");
    setBathAndBrush("");
    setFullServiceGroom("");
    setLoadingSubmission(false);
    setDocToUpdate();
    setIsEditing(false);
    setIsModalOpen(false);

    // wait 500ms providing some time for modal states to clear
    setTimeout(() => {
      // creating ref to the body element
      const bodyElem = document.getElementById("body");
      
      // removing class from body that disables scroll
      return bodyElem.classList.remove("modal-open-disable-body-scroll");
    }, 500)
  }

  const handleSubmittingForm = () => {
    // clear existing errors on submission
    setError("");

    // prepare data being added to database
    const data = {
      breed,
      bathAndBrush,
      fullServiceGroom
    }

    // make sure the form is filled out properly before submission
    if (breed.length === 0 || bathAndBrush.length === 0 || fullServiceGroom.length === 0) {
      // if not return user frienldy error message 
      return setError("One of the required parameters is missing. Fill out the form correctly and submit again.");
    }

    // if form submission is an edit, use the updateDoc method, else use addDoc method
    if (isEditing) {
      // creating ref to the document being updated
      const docRef = doc(db, 'pricing', docToUpdate.id)

      // use updateDoc method
      updateDoc(docRef, data).then(() => {
        // if successful close modal
        return handleClosingModal();
      }).catch((err) => {
        // otherwise return user friendly error message
        return setError(err.message);
      })
    } else {
      // created ref to the collection the document is being added to
      const collectionRef = collection(db, 'pricing');
  
      // use addDoc method
      addDoc(collectionRef, data).then(() => {
        // if successful close modal
        return handleClosingModal();
      }).catch((err) => {
        // otherwise return user friendly error message
        return setError(err);
      })
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
              <div style={{ position: "relative", height: "100%", width: "100%" }}>
                <div style={{ position: "absolute", top: "-67px", width: "100%", height: "67px" }}>
                  <div style={{ fontSize: "18px", padding: "20px", textAlign: "center", color: "#264a73", letterSpacing: "0.75px", fontWeight: "600", display: "flex", alignItems: "center", justifyContent: "center", lineHeight: "25px", borderBottom: "2px solid #264a73", backgroundColor: "#FFF", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}>
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

                <div style={{ marginTop: "67px", overflowY: "auto", height: "calc(100% - 107px)", alignItems: "center", color: "#264a73", letterSpacing: "0.75px", fontSize: "14px", fontWeight: "700", padding: "20px", display: "grid", gridTemplateColumns: "1fr", rowGap: "20px" }}>
                  <div style={{ display: "grid", gridTemplateRows: "20px 44px", rowGap: "10px" }}>
                    <label htmlFor="breed">Breed</label>

                    <input 
                      id="breed"
                      type="text" 
                      style={{ height: "40px", borderRadius: "5px", border: "2px solid #264a73", padding: "0px 20px" }}
                      value={breed}
                      onChange={(e) => setBreed(e.target.value)}
                    />
                  </div>

                  <div style={{ display: "grid", gridTemplateRows: "20px 44px", rowGap: "10px" }}>
                    <label htmlFor="bath-and-brush">Bath and Brush Price</label>

                    <input 
                      id="bath-and-brush"
                      type="text" 
                      value={bathAndBrush}
                      onChange={(e) => setBathAndBrush(e.target.value)}
                      style={{ height: "40px", borderRadius: "5px", border: "2px solid #264a73", padding: "0px 20px" }}
                    />
                  </div>

                  <div style={{ display: "grid", gridTemplateRows: "20px 44px", rowGap: "10px" }}>
                    <label htmlFor="full-service-groom">Full Service Groom Price</label>

                    <input 
                      id="full-service-groom"
                      type="text"
                      value={fullServiceGroom}
                      onChange={(e) => setFullServiceGroom(e.target.value)}
                      style={{ height: "40px", borderRadius: "5px", border: "2px solid #264a73", padding: "0px 20px" }}
                    />
                  </div>

                  {
                    error ? (
                      <div style={{ color: "#ff2424", fontSize: "14px", fontWeight: "600", textAlign: "center", padding: "0px 20px" }}>
                        {error}
                      </div>
                    ) : null
                  }

                  <button onClick={() => setLoadingSubmission(true)} style={{ cursor: "pointer", minWidth: "150px", padding: "10px 20px", lineHeight: "25px", height: "40px", width: "60%", backgroundColor: "#264a73", color: "#FFF", borderRadius: "7.5px", border: "none", fontWeight: "600", margin: "5px auto", letterSpacing: "0.75px" }}>
                    SUBMIT
                  </button>
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
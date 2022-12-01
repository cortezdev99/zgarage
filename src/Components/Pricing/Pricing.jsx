import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import PricingHeading from '../../Images/Pricing/pricing-header-image.jpg'
import MouseTrap from "../../Images/Homepage/mousetrap.jpg"
import { useCollection } from 'react-firebase-hooks/firestore'
import  { collection, doc, deleteDoc, updateDoc } from 'firebase/firestore'
import { useEffect } from 'react';
import { auth, db } from '../Config/firebase';
import { useContext } from 'react';
import PricingContext from '../../Contexts/PricingContext';
import PricingModal from './PricingModal';

const Pricing = () => {
  const [pricingList, loading, error] = useCollection(
    collection(db, 'pricing'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  const {
    setIsModalOpen,
    setIsEditing,
    setDocToUpdate,
    setLoading
  } = useContext(PricingContext);

  const handleOpeningModal = (docToUpdate) => {
    const bodyElem = document.getElementById("body");

    bodyElem.classList.add("modal-open-disable-body-scroll")

    if (docToUpdate !== "NEW_DOC") {
      setLoading(true);
      setIsEditing(true);
      setDocToUpdate(docToUpdate);
      return setIsModalOpen(true);
    }

    return setIsModalOpen(true);
  }

  const handleDeletingPrice = (docToDelete) => {
    const docRef = doc(db, 'pricing', docToDelete);
    return deleteDoc(docRef);
  }

  return (
    <div>
      <div>
        <div style={{ position: "relative", width: "100%", display: "flex", overflow: "hidden" }}>
          <img style={{ position: "relative", top: "-40px", width: "100%", objectPosition: "center", transform: "skewY(-5deg)", transformOrigin: "top left" }} src={PricingHeading} />
        </div>

        <div style={{ padding: "0px 40px 40px" }}>
          <div style={{ textAlign: "center", paddingBottom: "10px", textTransform: "uppercase", letterSpacing: "0.75px", fontSize: "18px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", columnGap: "5px", paddingRight: "10px" }}>
              <span style={{ transform: "rotate(315deg)" }}><FontAwesomeIcon icon={['fas', 'paw']} /></span>
              <span style={{ position: "relative", top: "-15px" }}><FontAwesomeIcon icon={['fas', 'paw']} /></span>
              <span style={{ transform: "rotate(45deg)" }}><FontAwesomeIcon icon={['fas', 'paw']} /></span>
            </div>

            <div>
              Services
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", columnGap: "5px", paddingLeft: "10px" }}>
              <span style={{ transform: "rotate(315deg)" }}><FontAwesomeIcon icon={['fas', 'paw']} /></span>
              <span style={{ position: "relative", top: "-15px" }}><FontAwesomeIcon icon={['fas', 'paw']} /></span>
              <span style={{ transform: "rotate(45deg)" }}><FontAwesomeIcon icon={['fas', 'paw']} /></span>
            </div>
          </div>

          <div style={{ marginTop: "40px", display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: "40px" }}>
            <div>
              <div style={{ paddingBottom: "10px", borderBottom: "1.5px solid #1d1d1d" }}>Full Service Groom</div>

              <ul style={{ margin: "20px 0px 0px" }}>
                <li style={{ paddingBottom: "10px" }}>High Quality Shampooing</li>
                <li style={{ paddingBottom: "10px" }}>Conditioning Spray</li>
                <li style={{ paddingBottom: "10px" }}>Fluff Dry</li>
                <li style={{ paddingBottom: "10px" }}>Brush Out</li>
                <li style={{ paddingBottom: "10px" }}>Nail Trim and Dremel</li>
                <li style={{ paddingBottom: "10px" }}>Full Body Cut</li>
                <li style={{ paddingBottom: "10px" }}>Gland Expression (Upon Request)</li>
                <li style={{ paddingBottom: "10px" }}>Nail Trim and Dremel</li>
                <li style={{ paddingBottom: "10px" }}>Ear Cleaning (Upon Request)</li>
                <li style={{ paddingBottom: "10px" }}>Plently of Love and Pets!</li>
              </ul>
            </div>

            <div style={{ alignSelf: "center", justifySelf: "end" }}>
              <img style={{ width: "100%", borderRadius: "15px", display: "flex" }} src={MouseTrap} />
            </div>
          </div>

          <div style={{ marginTop: "40px", display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: "40px" }}>
            <div style={{ alignSelf: "center", justifySelf: "start" }}>
              <img src="https://via.placeholder.com/250x250" />
            </div>

            <div>
              <div style={{ paddingBottom: "10px", borderBottom: "1.5px solid #1d1d1d", textAlign: "end" }}>Bath and Brush</div>

              <ul style={{ margin: "20px 0px 0px", direction: "rtl" }}>
                <li style={{ paddingBottom: "10px" }}>High Quality Shampooing</li>
                <li style={{ paddingBottom: "10px" }}>Conditioning Spray</li>
                <li style={{ paddingBottom: "10px" }}>Fluff Dry</li>
                <li style={{ paddingBottom: "10px" }}>Brush Out</li>
                <li style={{ paddingBottom: "10px" }}>Nail Trim and Dremel</li>
                <li style={{ paddingBottom: "10px" }}>Pad, Face, and Potty Area Trim</li>
                <li style={{ paddingBottom: "10px" }}>Gland Expression (Upon Request)</li>
                <li style={{ paddingBottom: "10px" }}>Nail Trim and Dremel</li>
                <li style={{ paddingBottom: "10px" }}>Ear Cleaning (Upon Request)</li>
                <li style={{ paddingBottom: "10px" }}>Lots of Cuddles</li>
              </ul>
            </div>
          </div>

          <div style={{ marginTop: "40px", textAlign: "center", paddingBottom: "10px", textTransform: "uppercase", letterSpacing: "0.75px", fontSize: "18px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", columnGap: "5px", paddingRight: "10px" }}>
              <span style={{ transform: "rotate(315deg)" }}><FontAwesomeIcon icon={['fas', 'paw']} /></span>
              <span style={{ position: "relative", top: "-15px" }}><FontAwesomeIcon icon={['fas', 'paw']} /></span>
              <span style={{ transform: "rotate(45deg)" }}><FontAwesomeIcon icon={['fas', 'paw']} /></span>
            </div>

            <div>
              Pricing
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", columnGap: "5px", paddingLeft: "10px" }}>
              <span style={{ transform: "rotate(315deg)" }}><FontAwesomeIcon icon={['fas', 'paw']} /></span>
              <span style={{ position: "relative", top: "-15px" }}><FontAwesomeIcon icon={['fas', 'paw']} /></span>
              <span style={{ transform: "rotate(45deg)" }}><FontAwesomeIcon icon={['fas', 'paw']} /></span>
            </div>
          </div>

          <div style={{ width: "90%", border: "2.5px solid #e1e1e1", borderLeft: "1.5px solid #e1e1e1", borderRight: "1.5px solid #e1e1e1", borderRadius: "10px", backgroundColor: "#FFF", margin: "40px auto", boxShadow: "#e1e1e1 0px 12px 10px 0px" }}>
            <div style={{ padding: "20px 5px", display: "grid", gridTemplateColumns: `${auth.currentUser ? "0.5fr 1fr 1fr 1fr" : "1fr 1fr 1fr" }`, textAlign: "center"}}>
              { auth.currentUser ? (
                <div onClick={() => handleOpeningModal("NEW_DOC")} style={{ fontSize: "18px", fontWeight: "600", color: "#264a73", cursor: "pointer" }}>
                  <FontAwesomeIcon icon={['fas', 'plus']} />
                </div>
              ) : null }
              <div style={{ textDecorationLine: "underline" }}>Breed</div>
              <div style={{ textDecorationLine: "underline" }}>Bath & Brush</div>
              <div style={{ textDecorationLine: "underline" }}>Full Service Groom</div>
            </div>

            <div>
              {
                pricingList && pricingList.docs.map((price) => {
                  const {
                    breed,
                    bathAndBrush,
                    fullServiceGroom
                  } = price.data();
                
                  return (
                    <div style={{ padding: "20px 5px", display: "grid", gridTemplateColumns: `${auth.currentUser ? "0.5fr 1fr 1fr 1fr" : "1fr 1fr 1fr" }`, textAlign: "center"}}>
                      {
                        auth.currentUser ? (
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly", fontSize: "18px" }}>
                            <div style={{ color: "#ff2424" }}>
                              <FontAwesomeIcon
                                style={{ cursor: "pointer" }} 
                                icon={['fas', 'trash-alt']}
                                onClick={() => handleDeletingPrice(price.id)}
                              />
                            </div>

                            <div style={{ color: "#264a73" }}>
                              <FontAwesomeIcon
                                style={{ cursor: "pointer" }} 
                                icon={['fas', 'pen-square']}
                                onClick={() => handleOpeningModal(price)}
                              />
                            </div>             
                          </div>
                        ) : null
                      }
                      <div>{breed}</div>
                      <div>{bathAndBrush}</div>
                      <div>{fullServiceGroom}</div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>

      {
        auth.currentUser ? (
          <PricingModal />
        ) : null
      }
    </div>
  )
}

export default Pricing;
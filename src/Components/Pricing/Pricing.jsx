import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import PricingHeading from '../../Images/Pricing/pricing-header-image.jpg'
import MouseTrap from "../../Images/Homepage/mousetrap.jpg"
import { useCollection, useCollectionData } from 'react-firebase-hooks/firestore'
import  { collection, doc, deleteDoc, orderBy, query } from 'firebase/firestore'
import { useEffect } from 'react';
import { auth, db } from '../Config/firebase';
import { useContext } from 'react';
import PricingContext from '../../Contexts/PricingContext';
import PricingModal from './PricingModal';
import wholeSomeDogImage from "../../Images/Other/wholesome-dog.png"
import Loading from '../Utilities/Loading';

const Pricing = () => {
  const [ search, setSearch ] = useState("");
  const [ pricingList, setPricingList ] = useState();
  const [pricingListData, loading, error] = useCollection(
    query(
      collection(db, 'pricing'),
      orderBy("breed", "asc")
    )
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

  useEffect(() => {
    if (pricingListData && search.length === 0) {
      return setPricingList(pricingListData.docs);
    } else if (search.length > 0) {
      const filteredPricingListData = pricingListData.docs.filter((priceData) => {
        const {
          breed
        } = priceData.data();

        return breed.toLowerCase().includes(search.toLowerCase());
      })

      return setPricingList(filteredPricingListData);
    }
  }, [pricingListData, search])

  return (
    <div className="pricing-and-services-container">
      <div className="pricing-and-services-wrapper">
        <div className="services-heading-wrapper">
          <div className="services-paw-print-group-wrapper">
            <span className="services-paw-print-left">
              <FontAwesomeIcon icon={['fas', 'paw']} />
            </span>

            <span className="services-paw-print-straight">
              <FontAwesomeIcon icon={['fas', 'paw']} />
            </span>

            <span className="services-paw-print-right">
              <FontAwesomeIcon icon={['fas', 'paw']} />
            </span>
          </div>

          <div className="services-heading">
            Services
          </div>

          <div className="services-paw-print-group-wrapper services-paw-print-right-group-wrapper">
            <span className="services-paw-print-left">
              <FontAwesomeIcon icon={['fas', 'paw']} />
            </span>

            <span className="services-paw-print-straight">
              <FontAwesomeIcon icon={['fas', 'paw']} />
            </span>

            <span className="services-paw-print-right">
              <FontAwesomeIcon icon={['fas', 'paw']} />
            </span>
          </div>
        </div>

        <div className="services-wrapper">
          <div className="services-group-container">
            <div className="service-heading">Full Service Groom</div>

            <ul className="services-group-wrapper">
              <li className="service">High Quality Shampooing</li>
              <li className="service">Conditioning Spray</li>
              <li className="service">Fluff Dry</li>
              <li className="service">Brush Out</li>
              <li className="service">Nail Trim and Dremel</li>
              <li className="service">Full Body Cut</li>
              <li className="service">Gland Expression (Upon Request)</li>
              <li className="service">Nail Trim and Dremel</li>
              <li className="service">Ear Cleaning (Upon Request)</li>
              <li className="service">Plently of Love and Pets!</li>
            </ul>
          </div>

          <div className="service-image-wrapper">
            <img className="service-image" src={MouseTrap} />
          </div>
        </div>

        <div className="services-wrapper">
          <div className="service-image-wrapper service-image-wrapper-varient">
            <img className="service-image" src="https://via.placeholder.com/250x250" />
          </div>

          <div className="services-group-container">
            <div className="service-heading">Bath and Brush</div>

            <ul className="services-group-wrapper services-group-wrapper-varient">
              <li className="service">High Quality Shampooing</li>
              <li className="service">Conditioning Spray</li>
              <li className="service">Fluff Dry</li>
              <li className="service">Brush Out</li>
              <li className="service">Nail Trim and Dremel</li>
              <li className="service">Pad, Face, and Potty Area Trim</li>
              <li className="service">Gland Expression (Upon Request)</li>
              <li className="service">Nail Trim and Dremel</li>
              <li className="service">Ear Cleaning (Upon Request)</li>
              <li className="service">Lots of Cuddles</li>
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

          <div style={{ position: "relative" }}>
            <input
              style={{ 
                width: "calc(100% - 50px)",
                padding: "0px 20px",
                height: "40px",
                border: "none",
                margin: "0px 5px",
                backgroundColor: "#ececec70",
                borderRadius: "2.5px"
                }}
              id="search-breed"
              placeholder="Search by breed (Ex: doodle)"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            
            {
              search.length > 0 ? (
                <div onClick={() => setSearch("")} style={{ cursor: "pointer", position: "absolute", top: "11px", right: "25px", fontSize: "17px" }}>
                  <FontAwesomeIcon icon={['fas', 'xmark']} />
                </div>
              ) : (
                <label for="search-breed" style={{ cursor: "pointer", position: "absolute", top: "11px", right: "25px", fontSize: "17px" }}>
                  <FontAwesomeIcon icon={['fas', 'magnifying-glass']} />
                </label>
              )
            }
          </div>

          <div>
            {
              pricingList && !loading && pricingList.length > 0 ? pricingList.map((price, idx) => {
                const {
                  breed,
                  bathAndBrush,
                  fullServiceGroom
                } = price.data();
              
                return (
                  <div key={idx} style={{ padding: "20px 5px", display: "grid", gridTemplateColumns: `${auth.currentUser ? "0.5fr 1fr 1fr 1fr" : "1fr 1fr 1fr" }`, textAlign: "center"}}>
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
              : loading ? (
                <div style={{ padding: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ fontSize: "18px", paddingBottom: "10px" }}>
                    Price List Loading
                  </div>

                  <div style={{ paddingBottom: "15px" }}>
                    Loading content... Please wait...
                  </div>

                  <Loading small={true} />
                </div>
              ) : (
                <div style={{ display: "flex" }}>
                  <div style={{ width: "150px" }}>
                    <img style={{ objectFit: "cover", width: "100%", height: "100%" }} src={wholeSomeDogImage} />
                  </div>

                  <div style={{ display: "flex", flex: "1", flexDirection: "column", justifyContent: "space-evenly", letterSpacing: "0.75px", padding: "0px 20px 0px 5px" }}>
                    <div style={{ fontSize: "18px" }}>
                      Uh-Oh
                    </div>

                    <div>
                      It looks like we haven't added that breed yet. You can contact us <span style={{ textDecorationLine: "underline" }}>here</span>
                    </div>
                  </div>
                </div>
              )
            }
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
import React, { useState } from "react";
import "./AchatOptions.css";
// eslint-disable-next-line no-unused-vars
import { FiCheck } from "react-icons/fi";
import Consulter from "./Consulter";
import PropTypes from 'prop-types';
import Vente from "../tools/Vente";
import { FaHandshake } from 'react-icons/fa';
import Details from "./Details";

const AchatOptions = (props) => {
  const [details, setdetails] = useState(false);
  const [consulter, setConsulter] = useState(false);
  const [confirme, setConfirme] = useState(true);
  const [modifier, setmodifier] = useState(false);

  return (
    <div className="option">
      <div className="row">
        <div className="option-photo">
          <img src="transactions/profile.png" alt="profile" />
        </div>

        <div className="option-details">
          <label className="option-details-title">
            Demande de Tony Reichert
          </label>

          <div className="option-details-title-container">
            <div className="option-details-title-container-title">
              
              <label className="option-details-row-label">Type:</label>
              <label className="option-details-row-label">Gamme:</label>
              <label className="option-details-row-label">Quantité:</label>
              <label className="option-details-row-label">Prix:</label>
            </div>
            <div className="option-details-title-container-values">
            <a>Matiere premiers</a>
            <a>Moyenne gamme</a>
            <div><a>40</a><FaHandshake style={{ color: '#166534' }} size={20} /></div>
            <div><a>200.000 dt</a><FaHandshake style={{ color: '#B91C1C' }} size={20} /></div>
            </div>
          </div>
        </div>
      </div>
            {/* <p className='option-details-nego'> Négociable</p> */}

            {/* <p className='option-details-nego'> Négociable</p> */}
      {consulter && (
        <Consulter setConfirme={setConfirme} setConsulter={setConsulter} />
      )}

      {confirme ? (
        <div className="option-details-row-buttons">
          <button onClick={() => setdetails(true)} className="option-details-Consulter-Details">Details</button>
          <button
            className="option-details-Consulter-Consulter"
            onClick={() => {
              if (props.button === "Consulter") {
                setConsulter(true);
              } else if (props.button === "Modifier") {
                setmodifier(!modifier);
              }
            }}
          >
            {props.button}
          </button>
        </div>
      ) : (
        <div className="Consulter">
          <div className="Consulter-row">
            <FiCheck className="Consulter-icon" />
            <p>
              La demande de vente a été confirmé par vous, confirmant ainsi sa
              participation à la commande.
            </p>
          </div>
        </div>
      )}

      {details  && <div className="overlay"></div>}

      {details && (<>
        <Details setdetails={setdetails}/>
      </>     )}

      {modifier &&(
        
                          <>
                            <Vente
                            title={"Modifier"}
                            confirme={"Mettre à jour "}
                            setmodifier={setmodifier}
                            />
                          </>
      )}
    </div>
  );
};
AchatOptions.propTypes = {
  button: PropTypes.string,
  setmodifier: PropTypes.func,
};

export default AchatOptions;

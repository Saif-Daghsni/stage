import React, { useState } from "react";
import "./AchatOptions.css";
// eslint-disable-next-line no-unused-vars
import { FiCheck } from "react-icons/fi";
import Consulter from "./Consulter";
import PropTypes from 'prop-types';
import Vente from "../tools/Vente"


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

          <div className="option-details-row">
            <label>Type    :</label>
            <a>Matiere premiers</a>
          </div>

          <div className="option-details-row">
            <label>Gamme :</label>
            <a>Moyenne gamme</a>
          </div>

          <div className="option-details-row">
            <label>Quantité:</label>
            <a>40</a>
          </div>

          <div className="option-details-row">
            <label>Prix        :</label>
            <a>200.000 dt</a>
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

      {details && (
        <div className="option-details-details">
          <button onClick={() => setdetails(false)}>go back</button>
        </div>
      )}

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

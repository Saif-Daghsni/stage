import React, { useState } from "react";
import "./AchatOptions.css";
// eslint-disable-next-line no-unused-vars
import { FiCheck } from "react-icons/fi";
import Consulter from "./Consulter";
import PropTypes from "prop-types";
import Vente from "./Vente";
import { FaHandshake } from "react-icons/fa";
import Details from "./Details";
import { BiShareAlt } from "react-icons/bi";
import Share from "./Share";
import Supprimer from "./Supprimer";

const AchatOptions = (props) => {
  const [details, setdetails] = useState(false);
  const [consulter, setConsulter] = useState(false);
  const [confirme, setConfirme] = useState(true);
  const [modifier, setmodifier] = useState(false);
  const [recherche, setrecherche] = useState(false);
  const [supprimer, setsupprimer] = useState(false);

  return (
    <div className="option">
      <div className="row">
        <div className="option-photo">
          <img src="transactions/profile.png" alt="profile" />
        </div>

        <div className="option-details">
          <label className="option-details-title">{props.user.name}</label>

          <div className="option-details-title-container">
            <div className="option-details-title-container-title">
              <label className="option-details-row-label">
                <p>Type</p>
                <p>:</p>
              </label>
              <label className="option-details-row-label">
                <p>Gamme</p>
                <p>:</p>
              </label>
              <label className="option-details-row-label">
                <p>Quantité</p>
                <p>:</p>
              </label>
              <label className="option-details-row-label">
                <p>Prix</p>
                <p>:</p>
              </label>
            </div>
            <div className="option-details-title-container-values">
              <a>{props.type}</a>
              <a>{props.gamme}</a>
              <div>
                <a>{props.quantite}</a>
                {props.quantiteNego === 0 ? (
                  <FaHandshake style={{ color: "#166534" }} size={20} />
                ) : (
                  <FaHandshake style={{ color: "#B91C1C" }} size={20} />
                )}
              </div>
              <div>
                <a>{props.prix} DT</a>
                {props.prixNego === 0 ? (
                  <FaHandshake style={{ color: "#166534" }} size={20} />
                ) : (
                  <FaHandshake style={{ color: "#B91C1C" }} size={20} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {consulter && (
        <Consulter setConfirme={setConfirme} setConsulter={setConsulter} />
      )}

      {confirme ? (
        <div className="option-details-row-buttons">
          {props.button == "Modifier" && (
            <>
              <button
                className="option-details-Consulter-share"
                onClick={() => setrecherche(true)}
              >
                <BiShareAlt size={13} />
              </button>
              <button
                className="option-details-Consulter-supprimer"
                onClick={() => {
                  setsupprimer(true);
                  console.log("Supprime clicked");
                }}
              >
                Supprimer
              </button>
            </>
          )}
          <button
            onClick={() => setdetails(true)}
            className="option-details-Consulter-Details"
          >
            Details
          </button>
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

      {details && <div className="overlay"></div>}

      {details && (
        <>
          <Details
            user={props.user}
            type={props.type}
            gamme={props.gamme}
            quantite={props.quantite}
            prix={props.prix}
            quantiteNego={props.quantiteNego}
            prixNego={props.prixNego}
            setdetails={setdetails}
          />
        </>
      )}

      {recherche && <div className="overlay"></div>}

      {recherche && (
        <>
          <Share user={props.user} setrecherche={setrecherche} />
        </>
      )}

      {modifier && (
        <>
          <Vente
            title={"Modifier"}
            confirme={"Mettre à jour "}
            setmodifier={setmodifier}
          />
        </>
      )}

      {supprimer && <Supprimer setsupprimer={setsupprimer} />}
    </div>
  );
};
AchatOptions.propTypes = {
  button: PropTypes.string,
  setmodifier: PropTypes.func,
};

export default AchatOptions;

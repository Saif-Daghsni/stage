import React from "react";
import PropTypes from "prop-types";
import "./Details.css";
import { FaHandshake } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

const Details = (props) => {
  return (
    <div className="option-details-details">
      <div className="option-details-details-top">
        <div className="option-details-details-img">
          <div className="option-photo">
            <FaUserCircle size={42} color="#3b5998" />
          </div>
        </div>
        <div className="option-details-details-name">{props.user.name}</div>
      </div>
      <div className="option-details-details-buttom">
        <div className="option-details-details-buttom-title">
          <div className="type-line">
            <h5>Type</h5> <p>:</p>
          </div>
          <div className="type-line">
            <h5>Gamme</h5>
            <p>:</p>
          </div>
          <div className="type-line">
            <h5>Fournisseurs </h5>
            <p>:</p>
          </div>
          <div className="type-line">
            <h5>Tours d&apos;achat</h5>
            <p>:</p>
          </div>
          <div className="type-line">
            <h5>Quantitie</h5>
            <p>:</p>
          </div>
          <div className="type-line">
            <h5>Prix</h5>
            <p>:</p>
          </div>
        </div>
        <div className="option-details-details-buttom-values">
          <p>{props.type}</p>
          <p>{props.gamme}</p>
          <p>EDFT</p>
          <p>5</p>
          <div className="detailsRow">
            <p>{props.quantite}</p>
            {props.quantiteNego === 0 ? (
              <FaHandshake style={{ color: "#166534" }} size={20} />
            ) : (
              <FaHandshake style={{ color: "#B91C1C" }} size={20} />
            )}
          </div>
          <div className="detailsRow">
            <p>{props.prix}</p>
            {props.prixNego === 0 ? (
              <FaHandshake style={{ color: "#166534" }} size={20} />
            ) : (
              <FaHandshake style={{ color: "#B91C1C" }} size={20} />
            )}
          </div>
        </div>
      </div>
      <button
        className="option-details-details-button"
        onClick={() => props.setdetails(false)}
      >
        Annuler
      </button>
    </div>
  );
};

Details.propTypes = {
  setdetails: PropTypes.func.isRequired,
};

export default Details;

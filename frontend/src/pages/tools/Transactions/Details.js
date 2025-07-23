import React from "react";
import PropTypes from "prop-types";
import "./Details.css";
const Details = (props) => {
  return (
    <div className="option-details-details">
      <div className="option-details-details-top">
        <div className="option-details-details-img">
          <img
            style={{ width: "50px", height: "50px" }}
            src="/Users/Avatar.png"
            alt=""
          />
        </div>
        <div className="option-details-details-name">Tony Reichert</div>
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
          <p>Matiere premiere</p>
          <p>Haut de gamme</p>
          <p>EDFT</p>
          <p>5</p>
          <p>5</p>
          <p>200</p>
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

import React from "react";
import PropTypes from "prop-types";
import { FaSearch } from "react-icons/fa";
import "./Share.css";
import ShareInfo from "./ShareInfo";

const Share = (props) => {
  return (
    <div className="option-details-details">
      <div className="share-top">
        <h4> Le barre de recherche</h4>
      </div>
      <div className="share-input-wrapper">
        <FaSearch className="share-search-icon" />
        <input type="text" className="share-user-input" placeholder="Recherche" />
      </div>
      <div className="share-list">
        <ShareInfo />
        <ShareInfo />
        <ShareInfo />
      </div>

      <div className="share-buttons">
        <button className="share-annuler" onClick={() => props.setrecherche(false)}>Annuler</button>
        <button className="share-envoyer">Envoyer</button>
      </div>
    </div>
  );
};
Share.propTypes = {
  setrecherche: PropTypes.func.isRequired,
};

export default Share;

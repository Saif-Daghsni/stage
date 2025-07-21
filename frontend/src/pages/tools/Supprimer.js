import React from "react";
import PropTypes from "prop-types";
import "./Supprimer.css";

const Supprimer = (props) => {
  return (
    <div className="consulter-container">
      <div className="overlay123"></div>
      <div className="consulter-container-under">
        Êtes-vous sûr de vouloir supprimer cette offre ?
        <div className="button-row123">
          <button
            className= "communique-button "
            onClick={() => props.setsupprimer(false)}
          >
            Annuler
          </button>
          <button
            className="confirme-button"
          >
            Confirme
          </button>
        </div>
      </div>
    </div>
  );
};
Supprimer.propTypes = {
  setsupprimer: PropTypes.func.isRequired,
};

export default Supprimer;

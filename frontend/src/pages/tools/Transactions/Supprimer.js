import React from "react";
import PropTypes from "prop-types";
import "./Supprimer.css";
import { handleError, handleSuccess } from "../../../utils";

const Supprimer = (props) => {
const handleDeleteOrder = async (id) => {
  console.log("Deleting order with ID:", id);
  try {
    const response = await fetch(
      `http://localhost:5000/deleteOrder/${props.user._id}/${props.selectedOrder._id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    const data = await response.json();
    if (response.ok) {
      handleSuccess(data.message);
      // Update the user state to remove the deleted order
      props.setUser(prevUser => ({
        ...prevUser,
        orders: prevUser.orders.filter(order => order._id !== id)
      }));
    } else {
      handleError(data.message);
    }
  } catch (error) {
    handleError("Erreur lors de la suppression de la commande");
  }
};
  return (
    <div className="consulter-container">
      <div className="overlay123"></div>
      <div className="consulter-container-under">
        Êtes-vous sûr de vouloir supprimer cette offre ?
        <div className="button-row123">
          <button
            className="communique-button "
            onClick={() => props.setsupprimer(false)}
          >
            Annuler
          </button>
          <button
            className="confirme-button"
            onClick={() => {
              handleDeleteOrder(props.selectedOrder._id);
              props.setsupprimer(false);
            }}
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

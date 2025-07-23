import React, { useState } from "react";
//import { FiPlus, FiMinus } from 'react-icons/fi';
import Select from "react-select";
import PropTypes from "prop-types";
import "./Vente.css";
import { FaHandshake } from "react-icons/fa";

/*
function Input_vente(props) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    const val = e.target.value;
    if (val === '' || /^[0-9]+$/.test(val)) {
      setValue(val);
    }
  };

  const increment = () => {
    setValue((prev) => {
      const num = parseInt(prev) || 0;
      return num + 1;
    });
  };

  const decrement = () => {
    setValue((prev) => {
      const num = parseInt(prev) || 0;
      return num > 0 ? num - 1 : 0;
    });
  };

  return (
    <div className='new-div-input'>
      <input
        className='new-vente-input'
        // eslint-disable-next-line react/prop-types
        placeholder={props.name}
        type='text'
        value={value}
        onChange={handleChange}
      />
      <div className='Pricerow'>
        <button className='the-button' type='button' onClick={decrement}>
          <FiMinus size={18} />
        </button>
        <button className='the-button' type='button' onClick={increment}>
          <FiPlus size={18} />
        </button>
      </div>
    </div>
  );
}*/

const customStyles = {
  control: (provided) => ({
    ...provided,
    height: "43px",
    marginTop: "5px",
    outline: "none",
    paddingLeft: "8px",
    paddingRight: "8px",
    borderRadius: "8px",
    border: "2px solid #E4E4E7",
    fontWeight: 500,
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    boxShadow: "none",
    "&:hover": {
      borderColor: "none",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "#CDE3F2"
      : state.isFocused
        ? "#CDE3F2"
        : "#fff",
    color: "#000",
    borderRadius: "5px",
    cursor: "pointer",
  }),
  placeholder: (provided) => ({
    ...provided,
    margin: 0,
    padding: 0,
    lineHeight: "36px",
    color: "#E4E4E7 !important",
  }),
  input: (provided) => ({
    ...provided,
    margin: 0,
    padding: 0,
    lineHeight: "36px",
  }),
};

const gammeOptions = [
  { value: "Entrée de gamme", label: "Entrée de gamme" },
  { value: "Moyenne gamme", label: "Moyenne gamme" },
  { value: "Haut gamme", label: "Haut gamme" },
];

const typeoptions = [
  { value: "Matières premières", label: "Matières premières" },
  { value: "Emballage", label: "Emballage" },
  { value: "Produits fini", label: "Produits fini" },
  { value: "Machines", label: "Machines" },
];

const Vente = (props) => {
  const [prixNego, setPrixNego] = useState(false);
  const [quantite, setQuantite] = useState("");
  const [prix, setPrix] = useState("");
  const [quantiteNego, setQuantiteNego] = useState(false);
  const [type, setType] = useState("");
  const [gamme, setGamme] = useState("");
  const [publier, setPublier] = useState(true);

  const handleChangeType = (option) => {
    setType(option);
  };

  const handleChangeGamme = (option) => {
    setGamme(option);
  };

  return (
    <div className="transaction-Bottom-vente">
      <label className="vente-title">{props.title}</label>

      <label className="vente-label">Type</label>
      <Select
        options={typeoptions}
        value={type}
        onChange={handleChangeType}
        name="type"
        styles={customStyles}
        placeholder="Select a type"
      />

      <label className="vente-label">Gamme</label>
      <Select
        options={gammeOptions}
        value={gamme}
        onChange={handleChangeGamme}
        name="gamme"
        styles={customStyles}
        placeholder="Select a gamme"
      />

      {/* debut Quantité & Prix */}
      <div className="quantite-prix-block">
        <label className="vente-label">Quantité</label>
        <div className="Pricerow">
          <input
            className="vente-input-prix"
            type="number"
            placeholder="Quantité"
            onChange={(e) => setQuantite(e.target.value)}
          />
          <div className="prixdiv">
            <label className="custom-checkbox">
              <input type="checkbox" className="prixcheckbox" name="agree" />
              <span
                className="checkmark"
                onClick={() => setQuantiteNego(!quantiteNego)}
              ></span>
              <span className="Prixlabel">Négociable</span>
            </label>
          </div>
        </div>

        <label className="vente-label">Prix</label>
        <div className="Pricerow">
          <input
            className="vente-input-prix"
            type="number"
            placeholder="Prix"
            onChange={(e) => setPrix(e.target.value)}
          />
          <div className="prixdiv">
            <label className="custom-checkbox">
              <input type="checkbox" className="prixcheckbox" name="agree" />
              <span
                className="checkmark"
                onClick={() => setPrixNego(!prixNego)}
              ></span>
              <span className="Prixlabel">Négociable</span>
            </label>
          </div>
        </div>
      </div>
      {/* fin Quantité & Prix */}

      <div className="transaction-Bottom-vente-buttons">
        <button
          className="transaction-Bottom-vente-buttons1"
          onClick={() => {
            if (props.title === "Vente" || props.title === "Achat") {
              props.setvente(false);
            } else if (props.title === "Modifier") {
              props.setmodifier(false);
            }
          }}
        >
          Annuler
        </button>
        <button
          className="transaction-Bottom-vente-buttons2"
          onClick={() => setPublier(!publier)}
        >
          Publier
        </button>
      </div>

      {/* debut confirmation */}

      {publier && <div className="overlay"></div>}

      {publier && (
        <div className="confirmation">
          <div className="confirmation-container-top">Votre information</div>
          <div className="confirmation-container">
            <div className="Pricerow">
              <div className="confirmation-title">
                <label className="confirmation-label">
                  <p>Type</p>
                  <p>:</p>
                </label>
                <label className="confirmation-label">
                  <p>Gamme</p>
                  <p>:</p>
                </label>
                <label className="confirmation-label">
                  <p>Quantité</p>
                  <p>:</p>
                </label>
                <label className="confirmation-label">
                  <p>Prix</p>
                  <p>:</p>
                </label>
              </div>
              <div className="confirmation-values">
                <a className="confirmation-values-a">{type ? type.label : 'Sélectionnez un type'}</a>
                <a className="confirmation-values-a">{gamme ? gamme.label : 'Sélectionnez une gamme'}</a>
                <div>
                  <a className="confirmation-values-a">{quantite ? quantite : 'Vide'}</a>
                  {quantiteNego ? (
                    <FaHandshake style={{ color: "#166534" }} size={20} />
                  ) : (
                    <FaHandshake style={{ color: "#B91C1C" }} size={20} />
                  )}
                </div>
                <div>
                  <a className="confirmation-values-a">{prix ? prix : 'Vide'}{prix ? 'dt' : ''}</a>{" "}
                  {prixNego ? (
                    <FaHandshake style={{ color: "#166534" }} size={20} />
                  ) : (
                    <FaHandshake style={{ color: "#B91C1C" }} size={20} />
                  )}
                </div>
              </div>
            </div>

            <div className="Pricerow">
              <button
                className="transaction-Bottom-vente-buttons1"
                onClick={() => setPublier(!publier)}
              >
                cancel
              </button>
              <button className="transaction-Bottom-vente-buttons2">
                confirme
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Fin confirmation */}
    </div>
  );
};

Vente.propTypes = {
  setvente: PropTypes.func.isRequired,
  setmodifier: PropTypes.func, // Add this line for setmodifier prop validation
  modifier: PropTypes.any, // Add this line for modifier prop validation
  title: PropTypes.string.isRequired,
};

export default Vente;

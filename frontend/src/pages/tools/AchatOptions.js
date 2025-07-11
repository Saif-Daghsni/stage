import React, { useState } from 'react';
import './AchatOptions.css';
// eslint-disable-next-line no-unused-vars
import { FiCheck } from 'react-icons/fi';
import Consulter from './Consulter';

const AchatOptions = (props) => {
  const [details, setdetails] = useState(false);
  const [consulter, setConsulter] = useState(false);
  const [confirme, setConfirme] = useState(true);

  return (
    <div className='option'>
      <div className='row'>
        <div className='option-photo'>
          <img src='transactions/profile.png' alt='profile' />
        </div>

        <div className='option-details'>
          <label className='option-details-title'>Demande de Tony Reichert</label>

          <div className='option-details-row'>
            <label>Type :</label>
            <a>Matiere premiers</a>
          </div>

          <div className='option-details-row'>
            <label>Gamme :</label>
            <a>Moyenne gamme</a>
          </div>

          <div className='option-details-row'>
            <label>Quantité :</label>
            <a>40</a>
          {/* <p className='option-details-nego'> Négociable</p> */}
          </div>

          <div className='option-details-row'>
            <label>Prix :</label>
            <a>200.000 dt</a>
          {/* <p className='option-details-nego'> Négociable</p> */}
          </div>

        </div>
      </div>

      {consulter && (
        <Consulter setConfirme={setConfirme} setConsulter={setConsulter} />
      )}

      {confirme ? (
        <div className='option-details-row-buttons'>
          <button
            className='option-details-Consulter-Consulter'
            onClick={() => setConsulter(true)}
          >
            {props.button}
          </button>
        </div>
      ) : (
        <div className='Consulter'>
          <div className='Consulter-row'>
            <FiCheck className='Consulter-icon' />
            <p>
              La demande de vente a été confirmé par vous, confirmant ainsi sa participation à la commande.
            </p>
          </div>
        </div>
      )}

      {details && <div className='overlay'></div>}

      {details && (
        <div className='option-details-details'>
          <button onClick={() => setdetails(false)}>go back</button>
        </div>
      )}
    </div>
  );
};

export default AchatOptions;

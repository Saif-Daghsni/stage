/* eslint-disable react/prop-types */
import React from 'react'
import './Consulter.css'
import { useState } from 'react';
const Consulter = (props) => {
    // eslint-disable-next-line no-unused-vars
    const [no,setno]=useState(true);
  return (
    <div className='consulter-container'>
        <div className='overlay123'></div> 
        <div className='consulter-container-under'>
            
        <div className='button-row'>
            <button className={`${no ? 'negocier-active' : 'communique-button '}`}>Négocier</button>
            <button className='confirme-button' onClick={() => {props.setConsulter(false); props.setConfirme(false);}}>Confirme</button>
        </div> 
        <button className='annuler-button' onClick={() => props.setConsulter(false) }>Annuler</button>
        </div>
    </div>
  )
}

export default Consulter
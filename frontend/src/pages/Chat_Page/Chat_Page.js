import React, { useState } from 'react';
import './Chat_Page.css';
import AchatOptions from '../tools/AchatOptions';
import Vente from "../tools/Vente";
import User from '../tools/User';


const Chat_Page = () => {


  const [achat, setachat] = useState(false);
  const [vente, setvente] = useState(false);
  const [Lesvente, setLesvente] = useState(false);
  const [Lesachat, setLesachat] = useState(false);
  const [conversation, setConversation] = useState(false);
  const [historique, sethistorique] = useState(false);

  return (
    <div>
      
      <div className='topBar'></div>

      <div className='navBar'>
        <div className='container'>
          <div className='under-container'>
            <label className='logo'>Chat</label>

            <div className='divs'>
              <div className='users'>
                <User />
              </div>

              <div className='chat'>
                <div className='chat-top'>
                  <label className='transaction-label'>User</label>
                </div>

                <div className='chat-container'>
                  <div className='chat-bottom'>
                    <input
                      className='chat-input'
                      type='text'
                      placeholder='Enter a prompt here'
                    />
                  </div>
                </div>
              </div>

              {/* debut  transaction */}
              <div className='transaction'>
                <div className='transaction-top'>
                  <label className='transaction-label'>
                    Repertoire des transactions
                  </label>
                  <button className='transaction-button'>
                    <img src='/transactions/Vector.png' alt='img1' />
                  </button>
                </div>

                {vente ? (
                  <>
                    <Vente
                    title={"Vente"}
                    setvente={setvente}
                    />
                  </>
                ):achat ?( 
                  <>
                    <Vente
                    title={"Achat"}
                    setvente={setachat}
                    />
                  </>
                ) : conversation  ? (
                  <div className='achat'>
                    <div className='achatoptions'>
                      <div className='achat-vente-buttons'>
                        <button className='achat-button' onClick={() =>setachat(true)}>Besoin d’achat</button>
                        <button className='achat-button' onClick={() =>setvente(true)}>Besoin de vente</button>
                      </div>

                      <AchatOptions button={"Consulter"}/>
                      <AchatOptions button={"Consulter"}/>
                      <AchatOptions button={"Consulter"}/>
                      <AchatOptions button={"Consulter"}/>
                      <AchatOptions button={"Consulter"}/>
                      <AchatOptions button={"Consulter"}/>
                    </div>

                    <button
                      className='achatAnuuler'
                      onClick={() => setConversation(false)}
                    >
                      Annuler
                    </button>
                  </div>
                ): historique ?
                (
                  <div className='achat'>
                    <div className='achatoptions'>
                      <div className='achat-vente-buttons'>
                        <button 
                        className={Lesachat ? 'achat-button-active' : 'achat-button-inactive'}
                        onClick={() => {setLesachat(true);setLesvente(false)}}>Les achat</button>
                        <button 
                        className={Lesvente ? 'achat-button-active' : 'achat-button-inactive'}
                        onClick={() =>{setLesachat(false);setLesvente(true)}}>Les vente</button>
                      </div>
                      {Lesachat && (
                        <>
                      <AchatOptions  button={"Modifier"}/>
                      </>)
                      }
                      {Lesvente  && (
                        <>
                      <AchatOptions  button={"Modifier"}/>
                      <AchatOptions  button={"Modifier"}/>
                      </>)
                      }
                    </div>

                    <button
                      className='achatAnuuler'
                      onClick={() => sethistorique(false)}
                    >
                      Annuler
                    </button>
                  </div>

                ):(
                  <div className='transaction-Bottom'>
                    <img src='/transactions/buttom.jpg' alt='imgbuttom' />
                    <button
                      className='transaction-Bottom-button1'
                      onClick={() => setConversation(true)}
                    >
                      La conversation public
                    </button>
                    <button
                      className='transaction-Bottom-button1'
                      onClick={() => sethistorique(true)}
                    >
                      Votre historique
                    </button>
                  </div>
                )}


              </div>
              {/* Fin transaction */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat_Page;

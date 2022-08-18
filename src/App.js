import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [activekey, setActivekey] = useState('');
  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      playSonido(event.key.toUpperCase());
    }
      )
  }, [])

  const pads = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ];

function playSonido(input){

const sonido = document.getElementById(input);
sonido.play();
setActivekey(input)
}


  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">{activekey}</div>
          <div className='drum-pads'>
          {pads.map((pads) => (<div onClick={() => {
            playSonido(pads.keyTrigger)
          }} className='drum-pad' id={pads.id}>{pads.keyTrigger}
          <audio className='clip' id={pads.keyTrigger} src={pads.url}></audio>
          </div>))}
          </div>
          {/* <button 
            className='drum-pad' 
            id='Q'>
              <audio className='clip' id='Q' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'>
                Q
              </audio>
          </button>
          <button className='drum-pad' id='W'>W</button>
          <button className='drum-pad' id='E'>E</button>
          <button className='drum-pad' id='A'>A</button>
          <button className='drum-pad' id='S'>S</button>
          <button className='drum-pad' id='D'>D</button>
          <button className='drum-pad' id='Z'>Z</button>
          <button className='drum-pad' id='X'>X</button>
          <button className='drum-pad' id='C'>C</button> */}
        
      </div>
    </div>
  );
}

export default App;

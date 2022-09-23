import React, { useState } from 'react';
import './App.css';

 interface Value {
    name: string,
    time: number,
    padd: number,
  }

function App() {
 const [landingTime, setLandingTime] = useState(7.4);
 const [configurator, setConfigurator] = useState(0.2);
 const [check, setCheck] =useState(7.0);
 const [deal,setDeal] = useState(3.8);

 
   const[paddLanding] = useState(0);
  const[paddConfigurator, setPaddConfigurator] = useState(landingTime);
  const[paddCheck, setPaddCheck] = useState<number>(7.6);
  const [paddDeal, setPaddDeal] = useState<number>(14.6);

  const defaultValue: Value[] = [{ name: "Landing Page", time: landingTime, padd: paddLanding },
  { name: "Configurator", time: configurator, padd: paddConfigurator},
  { name: "Check-out", time: check, padd: paddCheck },
  { name: "Deal", time: deal, padd: paddDeal }];

 setTimeout(() => handelRandom(), 31800 )

  const handelRandom = () => {
    const landingNumber =  Number(((Math.random()* 1000)/10).toFixed(1));
        setLandingTime(landingNumber);
        setPaddConfigurator(landingNumber);

    const configuratorNumber = Number(((Math.random()* 1000)/10).toFixed(1));
        setConfigurator(configuratorNumber);
        const a = landingNumber + configuratorNumber
        setPaddCheck(a);

    const checkNumber =  Number(((Math.random()* 1000)/10).toFixed(1));
        setCheck(checkNumber);
        const c = a + checkNumber;
        setPaddDeal(c)
        
    const dealNumber =  Number(((Math.random()* 1000)/10).toFixed(1));
       setDeal(dealNumber);
  }

  return (
    <div className="App">
      <h1 className='App-title'>SPENT TIME (SECONDS)</h1>
      <div className='diagramma'>
     {defaultValue.map(item => ( <div className="diagrammas-field" key={item.name}>
          <h2 className="fiel-title">{item.name}</h2>
          <div className="field-wrapper">
            <div 
              className="value-position"
              style={{width: `${(item.time + item.padd > 100) ? 100 - item.padd : item.time}%`, left: `${item.padd}%`}}>{item.time}</div>
          </div>

        </div>) )}
        
        <button onClick={handelRandom}> Random </button>
      </div>
    </div>
  );
}

export default App;

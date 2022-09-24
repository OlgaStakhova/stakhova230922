import { useState } from 'react';
import './App.css';
import { Field } from './components/Field/Field';
import { Value } from './types/Value';
import { createRandom } from './helper/creatorRandom';

export let controlSum: () => number;

export const App: React.FC = () => {

  const [landingTime, setLandingTime] = useState(7.4);
  const [configuratorTime, setConfiguratorTime] = useState(0.2);
  const [checkTime, setCheckTime] = useState(7.0);
  const [dealTime, setDealTime] = useState(3.8);


  const [indentValueLanding] = useState(0);
  const [indentConfigurator, setIndentConfigurator] = useState(landingTime);
  const [indentCheck, setIndentCheck] = useState<number>(7.6);
  const [indentDeal, setIndentDeal] = useState<number>(14.6);

  const valueField: Value[] = [
    { name: "Landing Page", time: landingTime, indent: indentValueLanding },
    { name: "Configurator", time: configuratorTime, indent: indentConfigurator },
    { name: "Check-out", time: checkTime, indent: indentCheck },
    { name: "Deal", time: dealTime, indent: indentDeal }
  ];

  controlSum = () => valueField.reduce((acc: number, item: Value) => acc + item.time, 0);

  setTimeout(() => handelRandom(), 318000)

  const handelRandom = () => {
    const landingNumber = createRandom(0, 100);
    setLandingTime(landingNumber);
    setIndentConfigurator(landingNumber);

    const configuratorNumber = createRandom(0, (100 -landingNumber));
    const newIndentCheck = landingNumber + configuratorNumber;
    setConfiguratorTime(configuratorNumber);
    setIndentCheck(newIndentCheck);

    const checkNumber = createRandom(0, (100 -newIndentCheck));
    const newIndentDeal = newIndentCheck + checkNumber;
    setCheckTime(checkNumber);
    setIndentDeal(newIndentDeal);

    const dealNumber = createRandom(0, (100 - newIndentDeal));
    setDealTime(dealNumber);
  }

  return (
    <div className="App">
      <h1 className='App-title' data-testid='titleApp'>SPENT TIME (SECONDS)</h1>
      <div className='diagramma'>
        {valueField.map(item => <Field item={item} key={item.name}/> )}
      </div>
        <button 
          className="button-reset" 
          onClick={handelRandom}
        > 
          Random 
        </button>
    </div>
  );
};

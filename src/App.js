import React, {useState, useCallback} from 'react';
import Button from './components/UI/Button/Button';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [showPara, setShowPara] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const toggleHandler = useCallback(() => {
    if (allowToggle) {
      setShowPara((prevShowPara) => !prevShowPara);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle((prevAllow) => !prevAllow);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showPara} />
      {/* {showPara && <p>This is New Para!</p>} */}
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleHandler}>Toggle Change</Button>
    </div>
  );
}

export default App;

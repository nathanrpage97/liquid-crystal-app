import './App.css';

import React from 'react';
import LiquidServer from 'src/server/liquid';

const App: React.FC = () => {
  const [text, setText] = React.useState('');
  function setDisplay() {
    LiquidServer.display(text, 0, 0);
    setText('');
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Liquid Crystal LCD Controller</h1>
        <div style={{ display: 'flex' }}>
          <input type="text" value={text} onChange={event => setText(event.target.value)} />
          <button onClick={setDisplay}>Send</button>
          <button onClick={() => LiquidServer.clear()}>Clear</button>
        </div>
      </header>
    </div>
  );
};

export default App;

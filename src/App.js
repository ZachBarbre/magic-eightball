import React from 'react';
import AskEightBall from './components/AskEightBall.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ask the Magic Eight Ball</h1>
      </header>
      <main>
        <AskEightBall />
      </main>
    </div>
  );
}

export default App;

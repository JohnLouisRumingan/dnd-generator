import React from 'react';
import './dist/css/main.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        D&D generator.

        <div className='icons'>
          <a href="#" onClick={(e) => {
            e.preventDefault();
            window.open("https://github.com/JohnLouisRumingan/dnd-generator");
          }}>Github Repository</a>
        </div>
      </main>
    </div>
  );
}

export default App;

import React from 'react';
import './dist/css/main.css';
import { connect } from 'react-redux';

class App extends React.Component {

  render() {

  
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
}

const mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps)(App);

import React from 'react';
import ReactDom from 'react-dom';
import 'bulma/css/bulma.css';
import './app.css';
import { Navbar, Main } from './src/Components';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <div className='container main'>
        <div className='columns'>
          <Main />
        </div>
      </div>
    </div>
  );
}

ReactDom.render(<App />, document.getElementById('root'));

import React from 'react';
import ReactDom from 'react-dom';
import 'bulma/css/bulma.css';
import './app.css';
import { Aside, Main } from './src/components';

function App() {
  return (
    <div className='container'>
      <div className='columns'>
        <div className='column is-one-quarter'>
          <Aside className='theme-color' />
        </div>
        <div className='column section'>
          <Main />
        </div>
      </div>
    </div>
  );
}

ReactDom.render(<App />, document.getElementById('root'));

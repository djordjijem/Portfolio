import React from 'react';
import ReactDom from 'react-dom';
import 'bulma/css/bulma.css';
import './app.css';
import { Aside, Main } from './src/components';

function App() {
  return (
    <div className='container'>
      <div>some random text</div>
    </div>
  );
}

ReactDom.render(<App />, document.getElementById('root'));

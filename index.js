import React from 'react';
import ReactDom from 'react-dom';


function Greet(){
    return <div> Hello from Djordjije Matic! </div>
}

ReactDom.render(<Greet />, document.getElementById('root'));

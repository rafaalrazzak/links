import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import splitbee from '@splitbee/web';
splitbee.init()

ReactDOM.render(< React.StrictMode >
  <App />
</React.StrictMode>,
  document.getElementById('root')
);
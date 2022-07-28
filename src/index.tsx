import 'modern-normalize/modern-normalize.css';
import 'assets/fonts/stylesheet.css';
import 'react-image-lightbox/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <App />
    {/* </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById('root'),
);

//el cerebro de react

import React from 'react';
import ReactDOM from 'react-dom';
import Pie from './Pie';
import Encabezado from './Encabezado';

const pie = ReactDOM.createRoot(document.getElementById('pie'));
const encabezado = ReactDOM.createRoot(document.getElementById('encabezado'));

pie.render(
  <React.StrictMode>
    <Pie />
  </React.StrictMode>
);

encabezado.render(
  <React.StrictMode>
    <Encabezado />
  </React.StrictMode>
);

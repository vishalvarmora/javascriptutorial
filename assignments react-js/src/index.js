import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App'; 
// import Test from './Test';
// import App from './App';
// import App from './App';
// import Test from './Test';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import MainRouet from './MainRouet.jsx'
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={MainRouet}>

  </RouterProvider>
);




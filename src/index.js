import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
// import Multiple from './components/multiple';
import Rendering from './components/rendering';
import RenderingLists from './components/renderingLists';
import ConditionalRendering from './components/conditionalRendering';
import EventHandling from './components/eventHanding';
import BindingEvents from './components/bindingEvents';
// import UpdatingTheState from './components/updatingTheState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Multiple/> */}
    {/* <Rendering/> */}
    {/* <RenderingLists/> */}
    {/* <ConditionalRendering/> */}
    {/* <EventHandling/> */}
    {/* <BindingEvents/> */}
    {/* <UpdatingTheState/> */}
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

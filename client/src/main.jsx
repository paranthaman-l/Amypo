import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './Styles/index.css'
import { States } from './useContext/UseStates.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <States>
      <App />
    </States>
  </React.StrictMode>,
)

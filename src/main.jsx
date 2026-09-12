import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FoodProvider from './store/FoodContext.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <FoodProvider >
    <App />
  </FoodProvider>,
</Provider>
)

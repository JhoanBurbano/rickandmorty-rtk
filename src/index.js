import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import 'animate.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CharacterPage from './pages/CharacterPage'
import { Provider } from 'react-redux'
import { store } from './store/'

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<CharacterPage />} />
        </Route>
      </Routes>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

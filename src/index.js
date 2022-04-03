import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
import HttpApi from 'i18next-http-backend';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
.use(i18next)
.use(LanguageDetector)
.use(HttpApi)
.init({
  fallbackLng: 'en',
  debug: true,
  detection: {
  // Order and from where user language should be detected
  order: ['htmlTag', 'cookie', 'localStorage', 'path', 'subdomain'],
  caches: ["cookie"],
  },
  backend: {
    loadPath
  }
});



function App() {
  const { t } = useTranslation();

  return <h2>{t('Welcome to React')}</h2>;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.min.css'
//import 'flag-icon-css/css/flag-icon.min.css'

i18n
  .use(HttpApi)
  .use(LanguageDetector) 
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'es', 'ar', 'fr', ],
    fallbackLng: 'en', // Language not supported
    debug: false, 
    // Options for language detector to prioritize languagedetector
    detection: {
      order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
      caches: ['cookie'],
    },
    //react: { useSuspense: false },
    backend: {
      loadPath: '/assets/translations/{{lng}}/translation.json',
    },
  })

const loadingMarkup = (
  <div className='py-4 text-center'>
    <h2>Loading...</h2>
  </div>

)

ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);



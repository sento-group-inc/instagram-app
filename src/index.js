import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import App from './App';
import './index.css';
import ErrorBoundary from './components/ErrorBoundary';

// Initialize Firebase if not already initialized
import './config/firebase';

// Create root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app with necessary providers and error boundary
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);

// Enable hot module replacement for development
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept();
}

// Report web vitals if needed
const reportWebVitals = () => {
  if (process.env.NODE_ENV === 'development') {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(console.log);
      getFID(console.log);
      getFCP(console.log);
      getLCP(console.log);
      getTTFB(console.log);
    });
  }
};

reportWebVitals();
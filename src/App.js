import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';

// Page components
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

// UI components
import Navbar from './components/Navbar';
import ErrorBoundary from './components/ErrorBoundary';
import Toast from './components/Toast';

function App() {
  return (
    <AuthProvider>
      <Router>
        <ErrorBoundary>
          <div className="app-container">
            <Navbar />
            <Toast />
            <main className="main-content">
              <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <PrivateRoute exact path="/" component={Home} />
                <PrivateRoute exact path="/profile/:userId" component={Profile} />
                <Route path="*" component={NotFound} />
              </Switch>
            </main>
          </div>
        </ErrorBoundary>
      </Router>
    </AuthProvider>
  );
}

export default App;
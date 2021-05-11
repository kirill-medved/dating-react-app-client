import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Redirect } from 'react-router';

import ProfileContainer from './components/Profile';
import Login from './components/Login';
import './App.css';
import Register from './components/Register';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route path='/' exact render={() => <Redirect to='login' />} />
      <Route path='/login' render={() => <Login />} />
      <Route path='/register' render={() => <Register />} />
      <Route
        path='/profile'
        render={() => {
          return (
            <div className='app-wrapper'>
              <ProfileContainer />
            </div>
          );
        }}
      />

      {/* <Route path='/dialogs' render={() => <DialogsContainer />} /> */}
    </BrowserRouter>
  );
}

export default App;

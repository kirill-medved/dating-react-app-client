import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import ProfileContainer from './components/Profile';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className='app-wrapper'>
        <Route path='/profile' render={() => <ProfileContainer />} />
        {/* <Route path='/dialogs' render={() => <DialogsContainer />} /> */}
      </div>
      <Route path='/' render={() => <Login />} />
    </BrowserRouter>
  );
}

export default App;

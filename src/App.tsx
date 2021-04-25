import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import ProfileContainer from './components/Profile';
import Login from './components/Login';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className='app-wrapper'>
        <Header />
        <div className='content-wrapper'>
          <Route path='/profile/:userID?' render={() => <ProfileContainer />} />
          {/* <Route path='/dialogs' render={() => <DialogsContainer />} />*/}
          <Route path='/login' render={() => <Login />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

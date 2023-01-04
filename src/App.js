import React, {useEffect} from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/Counter';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { useDispatch, useSelector } from 'react-redux';
import {selectUser} from './features/userSlice';
import Login from './Login';
import {auth} from "./firebase";
import {login, logout} from './features/userSlice';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("user is ", user);
      if (authUser) {
        // user is logged in
        window.user = user;

        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName
        }))
      }
      else {
        dispatch(logout());
        // user is logged in
      }
    });
  }, [dispatch])
  return (
    <div className='app'>
      {/* <Login/> */}
      {/* <Sidebar />
      <Chat /> */}
      {/* <Login/> */}

      {/* <Sidebar/> */}
      {/* <Chat/> */}

      {user ? (
      <>
      <Sidebar />
      <Chat />
      </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;

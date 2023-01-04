import React, {useEffect, useState} from 'react';
// import * as ReactDOM from 'react-dom';
// import ReactDOM from 'react-dom';
import "./Sidebar.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CallIcon from "@mui/icons-material/Call";
// import {Avatar} from "@mui/base";
import { Avatar } from '@mui/material';
import MicIcon from "@mui/icons-material/Mic";
import HeadsetIcon from "@mui/icons-material/Headset";
import SettingsIcon from "@mui/icons-material/Settings";
import { useSelector } from 'react-redux';
import db, { auth} from "./firebase";
import { selectUser } from './features/userSlice';
import VideoCallIcon from '@mui/icons-material/VideoCall';

// import Jitsi from 'react-jitsi';
import {user} from 'firebase';
// import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";
// import db from 'firebase/db';
// import { getDatabase } from "firebase/database";
// import {collection, doc, onSnapshot} from 'firebase/firestore';


function Sidebar() {
    const user = useSelector(selectUser);
    // var currentUser = firebase.auth().currentUser;
    // console.log(currentUser);
    const [channels, setChannels] = useState([]);

    useEffect(() => {
    db.collection("channels").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          channel: doc.data(),
        }))
      )
    );
  }, []);

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener, noreferrer');
    }

  const handleAddChannel = () => {
    const channelName = prompt("Enter a new channel name");

    if (channelName) {
      db.collection("channels").add({
        channelName: channelName,
      });
    }
  };
    console.log(user);
    return (
        <div className="sidebar">
          <div className="sidebar__top">
            <h3>Chat Tank</h3>
            <ExpandMoreIcon />
          </div>
    
          <div className="sidebar__channels">
            <div className="sidebar__channelsHeader">
              <div className="sidebar__header">
                <ExpandMoreIcon />
                <h4>Text Channels</h4>
              </div>
    
              <AddIcon onClick={handleAddChannel} className="sidebar__addChannel" />
            </div>
    
            <div className="sidebar__channelsList">
              {channels.map(({ id, channel }) => (
                <SidebarChannel
                  key={id}
                  id={id}
                  channelName={channel.channelName}
                />
              ))}
            </div>
          </div>
    
          {/* <div className="sidebar__voice">
            <SignalCellularAltIcon
              className="sidebar__voiceIcon"
              fontSize="large"
            />
            <div className="sidebar__voiceInfo">
              <h3>Voice Connected</h3>
              <p>Stream</p>
            </div>
    
            <div className="sidebar__voiceIcons">
              <InfoOutlinedIcon />
              <CallIcon />
            </div>
          </div> */}
    
          <div className="sidebar__profile">
            <Avatar className='avatar' onClick={() => auth.signOut()} src={user.photo} />
            <div className="sidebar__profileInfo">
              <h3>Kaushal Patil</h3>
              <p>#{user.uid}</p>
            </div>
    
            <div className="sidebar__profileIcons">
              {/* <MicIcon /> */}

              <button onClick={() => openInNewTab('http://127.0.0.1:5502/')}><VideoCallIcon className='videocall'/></button>
              {/* <SettingsIcon /> */}
            </div>
          </div>
        </div>
      );
}

export default Sidebar

// function Sidebar() {
//   const user = useSelector(selectUser);
//   const [channels, setChannels] = useState([]);

//   useEffect(() => {
//     db.collection("channels").onSnapshot((snapshot) =>
//       setChannels(
//         snapshot.docs.map((doc) => ({
//           id: doc.id,
//           channel: doc.data(),
//         }))
//       )
//     );
//   }, []);

//   const handleAddChannel = () => {
//     const channelName = prompt("Enter a new channel name");

//     if (channelName) {
//       db.collection("channels").add({
//         channelName: channelName,
//       });
//     }
//   };

//   return (
//     <div className="sidebar">
//       <div className="sidebar__top">
//         <h3>Discord Clone</h3>
//         <ExpandMoreIcon />
//       </div>

//       <div className="sidebar__channels">
//         <div className="sidebar__channelsHeader">
//           <div className="sidebar__header">
//             <ExpandMoreIcon />
//             <h4>Text Channels</h4>
//           </div>

//           <AddIcon onClick={handleAddChannel} className="sidebar__addChannel" />
//         </div>

//         <div className="sidebar__channelsList">
//           {channels.map(({ id, channel }) => (
//             <SidebarChannel
//               key={id}
//               id={id}
//               channelName={channel.channelName}
//             />
//           ))}
//         </div>
//       </div>

//       <div className="sidebar__voice">
//         <SignalCellularAltIcon
//           className="sidebar__voiceIcon"
//           fontSize="large"
//         />
//         <div className="sidebar__voiceInfo">
//           <h3>Voice Connected</h3>
//           <p>Stream</p>
//         </div>

//         <div className="sidebar__voiceIcons">
//           <InfoOutlinedIcon />
//           <CallIcon />
//         </div>
//       </div>

//       <div className="sidebar__profile">
//         <Avatar onClick={() => auth.signOut()} src={user.photo} />
//         <div className="sidebar__profileInfo">
//           <h3>{user.displayName}</h3>
//           <p>#{user.uid.substring(0, 5)}</p>
//         </div>

//         <div className="sidebar__profileIcons">
//           <MicIcon />
//           <HeadsetIcon />
//           <SettingsIcon />
//         </div>
//       </div>
//     </div>
//   );
// }

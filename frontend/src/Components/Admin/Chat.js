
// import { ChatEngine } from 'react-chat-engine';

// import ChatFeed from './components/ChatFeed';
// import LoginForm from './components/LoginForm';
// import "./chat.css"
// import Fab from '@mui/material/Fab';
// import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Edit';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import NavigationIcon from '@mui/icons-material/Navigation';
// import { Link } from 'react-router-dom';

// const projectID = '7324a59e-869e-42a3-b1de-1e5b5a0a319d';

// const Chat = () => {
//   if (!localStorage.getItem('username')) return <LoginForm />;

//   return (
//     <div>

//       <ChatEngine
//         height="100vh"
//         projectID={projectID}
//         userName={localStorage.getItem('username')}
//         userSecret={localStorage.getItem('password')}
//         // userName="Ravi"
//         // userSecret="Ravi@2004"
//         renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
//         onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
//       />
//       <div style={{zIndex:"true"}}>
//       <Fab variant="extended">
//         <Link to="/">

//         <NavigationIcon sx={{ mr: 1 }} />
//         Navigate
//         </Link>
//       </Fab>
//       </div>
       
//     </div>
//   );
// };

// // infinite scroll, logout, more customizations...

// export default Chat;
import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import "./chat.css"
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import { Link } from 'react-router-dom';

const projectID = '7324a59e-869e-42a3-b1de-1e5b5a0a319d';

const Chat = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <div style={{ position: 'relative', height: '100%' }}>
      <ChatEngine
        height="100vh"
        projectID={projectID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />

        <Link to="/">
      <Fab variant="extended" style={{ position: 'absolute', bottom: '20px', right: '20px',backgroundColor:"#cabcdc" }}>
          <NavigationIcon sx={{ mr: 1 }} />
          Home
      </Fab>
        </Link>
    </div>
  );
};

export default Chat;

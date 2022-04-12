import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { addUser, deleteUser, updateUsername } from "./features/Users"
import { useState } from "react"

function App() {

  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [newUsername, setNewUsername] = useState("");

  const dispatch = useDispatch();

  const userList = useSelector((state) => state.users.value)

  return (
    <div className="App">
      <div className='addUser'>
        <input type="text" placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}></input>
        <input type="text" placeholder="Username..."
          onChange={(event) => {
            setUserName(event.target.value);
          }} ></input>
        {/* <button onClick={() => { dispatch(addUser({ id: 0, name: name, username: userName })) }}>Add User</button> */}
        <button onClick={() => { dispatch(addUser({ id: userList[userList.length - 1].id + 1, name, username })) }}>Add User</button>
      </div>
      <div className='displayUsers'>
        {userList.map((user) => {
          return (
            <div>
              <h3>{user.id}</h3>
              <h3>{user.name}</h3>
              <h4>{user.username}</h4>
              <input type="text" placeholder="New Username..."
                onChange={(event) => {
                  setNewUsername(event.target.value);
                }}
              >
              </input>
              <button onClick={() => {
                dispatch(updateUsername({ id: user.id, username: newUsername }))
              }} >Update Username</button>
              <button onClick={() => {
                dispatch(deleteUser({ id: user.id }));
              }}>Delete User</button>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;

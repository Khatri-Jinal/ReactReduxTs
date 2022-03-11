import React, { useEffect, useState } from "react";
import "./App.css";
import { Provider, useDispatch, useSelector } from "react-redux";
import Store, { RootStore } from "./Store";
import { GetUser } from "./actions/UserActions";
import { UserType } from "./actions/UserActionTypes";

function App() {
  const dispatch = useDispatch();
  //const [userName, setUserName] = useState("");
  const userState = useSelector((state: RootStore) => state.users);
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
  //   setUserName(event.target.value);
  // const handleSubmit = () => dispatch(GetUser(userName));
  // const users = dispatch(GetUser());
  console.log("user state:", userState);
  useEffect(() => {
    dispatch(GetUser());
  }, []);
  return (
    <div className="App">
      {/* <input type="text" onChange={handleChange} />
      <button onClick={handleSubmit}>Search</button>
      {userState.users && (
        <div>
          <img src={userState.users.sprites.front_default} alt="" />
          {userState.users.abilities.map((ability) => {
            return <p>{ability.ability.name}</p>;
          })}
        </div>
      )} */}
      {userState.loading && <p>Loading</p>}
      {!userState.loading && (
        <div>
          <ul>
            {userState.users.map((user: UserType) => {
              return <li key={user.id}>{user.first_name}</li>;
            })}
          </ul>
        </div>
      )}
      {/* {!userState.loading && <ul>{userState.map(user)}</ul>} */}
    </div>
  );
}

export default App;

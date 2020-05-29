import React, { useState } from "react";
import axios from "axios";
import Button from "./Button";
import FriendProfile from "./FriendProfile";
import "./Friend.css";

const Friend = () => {
  const [friend, setFriend] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);

  function getFriend() {
    setLoading(true);
    const apiUrl = "https://www.randomuser.me/api?results=1";
    axios
      .get(apiUrl)
      .then((res) => {
        setFriend(res.data.results[0]);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }

  return (
    <div>
      <Button clickEvent={getFriend} />
      {isLoading && (
        <img
          src="https://pixelpapa.com/wp-content/uploads/2018/11/32.gif"
          alt="GIF"
          style={{ width: "300px" }}
        />
      )}
      {!isLoading && friend.name && <FriendProfile newFriend={friend} />}
      {hasError && <p>Something went wrong</p>}
    </div>
  );
};

export default Friend;

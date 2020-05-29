import React from "react";

function FriendProfile({ newFriend }) {
  const { title, first, last } = newFriend.name;
  const { street, state, postcode, city, country } = newFriend.location;

  return (
    <div className="card">
      <ul className="">
        <div className="top">
          <li className="name">
            {title} {first} {last}
          </li>
          <img className="circle-img" src={newFriend.picture.large} alt="" />
        </div>
        <div className="bottom">
          <li className="info">
            {street.name} {street.number} {state} {postcode} {city}
          </li>
          <li className="info">{country}</li>
        </div>
      </ul>
    </div>
  );
}

export default FriendProfile;

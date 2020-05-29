import React from "react";

function DogPhoto({dogData}) {
  return <div>
      <img src={dogData} alt="Cute Dog Pics"/>
  </div>;
}

export default DogPhoto;

import React from "react";

function Joke({ jokeData }) {
  return (
    <div>
      <h1>Get A Random Joke</h1>
      <p>{jokeData.setup}</p>
      <p>{jokeData.punchline}</p>
    </div>
  );
}

export default Joke;

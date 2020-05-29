import React, { useState, useEffect } from "react";
import axios from "axios";
import Joke from "./Joke";

function RandomJoke() {
  const [joke, setJoke] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);

  useEffect(() => {
    getJoke();
  }, []);

  async function getJoke() {
    setLoading(true);

    try {
      const apiUrl = "https://official-joke-api.appspot.com/random_joke";
      const result = await axios.get(apiUrl);
      if (result.status === 200) {
        const data = await result.data;
        setJoke(data);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      {!hasError && <Joke jokeData={joke} />}
      {isLoading && <p>Wait a min...</p>}
      {hasError && <p>There is something wrong...</p>}
    </div>
  );
}

export default RandomJoke;

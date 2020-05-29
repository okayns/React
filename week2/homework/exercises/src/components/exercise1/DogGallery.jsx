import React, { useState } from "react";
import Button from "./Button";
import DogPhoto from "./DogPhoto";
import "./Dog.css";

function DogGallery() {
  const [dogPhotos, setDogPhotos] = useState([]);
  const [hasError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  async function getDogPhotos() {
    try {
      setLoading(true);
      const apiUrl = "https://dog.ceo/api/breeds/image/random";
      const res = await fetch(apiUrl);
      if (res.ok) {
        const data = await res.json();
        setDogPhotos([...dogPhotos, data.message]);
      } else {
        throw Error("Error");
      }
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="App">
      <Button clickEvent={getDogPhotos} />
      <div className="doggos">
        {isLoading ? (
          <p className="pTag">Still Loading, Be patient...</p>
        ) : (
          dogPhotos.map((photo, i) => <DogPhoto dogData={photo} key={i} />)
        )}
      </div>

      {hasError && <p>Erroorrr!!!</p>}
    </div>
  );
}

export default DogGallery;

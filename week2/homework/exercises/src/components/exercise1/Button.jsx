import React from "react";

function Button({ clickEvent }) {
  return (
    <div>
      <input type="button" value="Get Dog Photos" onClick={clickEvent} />
    </div>
  );
}

export default Button;
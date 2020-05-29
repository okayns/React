import React from "react";

function Button({ clickEvent, load }) {
  return (
    <div>
      <input type="button" value="Friend Search!" onClick={clickEvent} />
    </div>
  );
}

export default Button;

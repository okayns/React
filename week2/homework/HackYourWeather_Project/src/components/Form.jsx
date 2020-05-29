import React from "react";

function Form(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          name=""
          placeholder="Search City"
          onChange={props.handleChange}
          value={props.city}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}

export default Form;

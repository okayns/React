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
        <input
          type="submit"
          value="Search"
          disabled={props.city.trim().length === 0}
        />
      </form>
    </div>
  );
}

export default Form;

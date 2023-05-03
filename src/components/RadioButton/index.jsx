import { useState } from "react";

const RadioButton = (props) => {
  // Store values
  const [value, setValue] = useState('')

  // Return data to the Parent
  function changeHandler(event) {

    // Return true/false (case Quotaholder)
    if(event.target.value === "Sim") props.returnValue(true)
    else if (event.target.value === "Não") props.returnValue(false)
    else props.returnValue(event.target.value)
  }

  return (
    <div className="RadioButton">
      <input type="radio" name={props.name} value={props.label} onChange={changeHandler} />
      <label>{props.label}</label>
    </div>
  );
};

export default RadioButton;
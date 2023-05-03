import { useState } from "react";

const Input = (props) => {
  // Store values
  const [value, setValue] = useState('')

  //console.log(props)

  // Return data to the Parent
  function changeHandler(event) {
    setValue(event.target.value)
    props.returnValue(event.target.value)
  }

  return (
    <div className="Input" onChange={props.onChange}>
      <label className="Input-label">{props.label}</label>
      {props.options &&
        <select defaultValue={""} onChange={changeHandler}>
          <option value="" disabled>{props.placeholder}</option>
          {props.options.map((item, index) => (
            <option value={item} key={index}>{item}</option>
          ))}
        </select>
      }
      {props.options == null &&
        <input type={props.type} placeholder={props.placeholder} required={props.required} value={value} onChange={changeHandler}/>
      }
      <span className="Input-message">{props.mesage}</span>
    </div>
  );
};

export default Input;
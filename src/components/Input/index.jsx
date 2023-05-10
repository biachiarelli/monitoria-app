const Input = (props) => {
    return (
        <div className="Input" onChange={props.onChange}>
            <label className="Input-label">{props.label}</label>
            { props.options && 
              <select>
                <option value="" disabled selected>{props.placeholder}</option>
                {props.options.map((item, index) => (
                  <option value={item}>{item}</option>
                ))}
              </select>
            }
            { props.options == null && 
            <input type={props.type} placeholder={props.placeholder} required={props.required} />
            }
            <span className="Input-message">{props.mesage}</span>
      </div>
    );
  };
  
  export default Input;
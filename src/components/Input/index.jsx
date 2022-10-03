const Input = (props) => {
    return (
        <div className="Input" onChange={props.onChange}>
            <label className="Input-label">{props.label}</label>
            <input type={props.type} placeholder={props.placeholder} required={props.required} />
            <span className="Input-message">{props.mesage}</span>
      </div>
    );
  };
  
  export default Input;
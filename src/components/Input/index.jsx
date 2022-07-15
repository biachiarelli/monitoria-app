const Input = (props) => {
    return (
        <div className="Input">
            <label className="Input-label">{props.label}</label>
            <input type={props.type} placeholder={props.placeholder}  />
            <span className="Input-message">{props.mesage}</span>
      </div>
    );
  };
  
  export default Input;
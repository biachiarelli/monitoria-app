const RadioButton = (props) => {
    return (
      <div className="RadioButton">
        <input type="radio" />  
        <label>{props.label}</label>        
      </div>
    );
  };
  
  export default RadioButton;
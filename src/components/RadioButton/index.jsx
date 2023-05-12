const RadioButton = (props) => {
    return (
      <div className="RadioButton">
        <input type="radio" name={props.name} id={props.id} />  
        <label>{props.label}</label>        
      </div>
    );
  };
  
  export default RadioButton;
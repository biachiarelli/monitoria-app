const Button = (props) => {
    return (
        <button className={`Button ${ props.buttonStyle }`} onClick={props.onClick}>{props.label}</button>
    );
  };
  
  export default Button;
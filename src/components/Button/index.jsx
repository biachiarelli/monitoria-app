const Button = (props) => {
    return (
        <button disabled={props.disabled} className={`Button ${ props.buttonStyle }`} onClick={props.onClick}>{props.label}</button>
    );
  };
  
  export default Button;
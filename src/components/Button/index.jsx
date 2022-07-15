const Button = (props) => {
    return (
        <button className={`Button ${ props.buttonStyle }`}>{props.label}</button>
    );
  };
  
  export default Button;
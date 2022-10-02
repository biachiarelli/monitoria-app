const StepperRegister = (props) => {
  const nItens = props.itens.length
  const partSize = 100 / nItens;
  let activeItem = 0

  for (let item of props.itens) {
    if(item.active) {
      activeItem++;
    }
  }

  const activeSize = (partSize * activeItem);

    return (
        <div className="StepperRegister">
          <hr className="StepperRegister-line background" />
          <hr className="StepperRegister-line active" style={{width: activeSize + '%'}} />
          {props.itens.map((item, index) => (
            <div key={index} >
              <div  className={"StepperRegister-item " + (item.active ? 'active' : '')} >
                  <div className="StepperRegister-item__number">{index+1}</div>
                  <div className="StepperRegister-item__label">{item.label}</div>
              </div>
              <hr className="StepperRegister-line" />
            </div>
          ))}
      </div>
    );
  };
  
  export default StepperRegister;
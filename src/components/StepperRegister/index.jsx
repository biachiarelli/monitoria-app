import { useEffect, useState } from "react";

const StepperRegister = (props) => {
  const partSize = (100 / props.length);
  const [activeItem, setActiveItem] = useState(1);
  const [activeSize, setActiveSize] = useState(0);
  const [itens, setItens] = useState([]);

  useEffect(() => {
    setItens(props.getItens());

    props.getItens().forEach((item, index) => {
      if(item.active)
      setActiveItem(index + 1);
    });

    setActiveSize(partSize * activeItem);

  });

    return (
        <div className="StepperRegister">
          <hr className="StepperRegister-line background" />
          <hr className="StepperRegister-line active" style={{width: activeSize + '%'}} />
          {itens.map((item, index) => (
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
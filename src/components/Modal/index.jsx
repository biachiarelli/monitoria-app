import React from "react";
import icon from "../../assets/img/close.png";

export default function Modal(props) {
  

    return (
      <>
        <div className="darkBG" onClick={() => props.setIsOpen(false)} />
        <div className="centered">
          <div className="modal">
            <button className="closeBtn" onClick={() => props.setIsOpen(false)}>
              <img src={icon} alt="Fechar" />
            </button>
            { props.children }
          </div>
      </div>
      </>
    );
}
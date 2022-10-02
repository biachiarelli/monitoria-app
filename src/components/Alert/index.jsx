import css from "classnames";
import React from "react";
import { useState } from "react";

export default function Alert({ children, type, message }) {
  const [isShow, setIsShow] = useState(true);

  const renderElAlert = function () {
    return React.cloneElement(children);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setIsShow(false);
  };

  return (
    <div className="Alert">
        <div className={css("alert", type, !isShow && "hide")}>
            <span className="closebtn" onClick={handleClose}>
                &times;
            </span>
            {children ? renderElAlert() : message}
        </div>
    </div>
  );
}
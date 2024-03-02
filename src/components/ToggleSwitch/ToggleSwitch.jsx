import React, { useState } from "react";
import "./toggle.css";

const ToggleSwitch = ({ label, toggled, onClick }) => {
  const [isToggled, toggle] = useState(toggled);

  const callback = () => {
    toggle(!isToggled);
    onClick(!isToggled);
  };
  return (
    <label>
      <input
        className="toggleSwitchInput"
        type="checkbox"
        defaultChecked={isToggled}
        onClick={callback}
      />
      <span className="toggleSwitch"></span>
    </label>
  );
};

export default ToggleSwitch;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changecanvasWidth, changecodeLanguage, changeFontTheme, changesnippetFontFamily } from "../../redux/CanvasConfigSlice";

import "./Dropdown.css";

const Icon = () => {
  return (
    <svg fill="#ffff"  height="20" width="20" viewBox="0 0 20 20">
      <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
    </svg>
  );
};

const DropdownTheme = ({ placeHolder,options }) => {

    const [showMenu, setshowMenu] = useState(false);
    const [selectedValue, setselectedValue] = useState(null);
    const dispatch = useDispatch();
    const FontTheme= useSelector((state)=>state.canvasStyle.FontTheme);

    useEffect(() => {
        const handler = () => setshowMenu(false);

        window.addEventListener("click",handler);

        return () => {
            window.removeEventListener("click",handler);
        };
    },[]);

    const handleInputClick = (e) => {
        e.stopPropagation();
        setshowMenu(!showMenu);
    }
    

  const getDisplay = () => {
    if(selectedValue){
        return selectedValue.label;
    }
    return placeHolder;
  };

  const onItemClick = (option) =>{
        setselectedValue(option);
        dispatch(changeFontTheme(option.value));   
  }

  const isSelected = (option) =>{
    if(!selectedValue){
        return false;
    }

    return selectedValue.value === option.value;
  };

  return (
    <div className="dropdown-container ml-3">
      <div onClick={handleInputClick} className="dropdown-input w-[120px]" >
        <div className="dropdown-selected-value">{getDisplay()}</div>
        <div className="dropdown-tools">
          <div className="dropdown-tool">
            <Icon />
          </div>
        </div>
      </div>
      {showMenu && (
        <div className="dropdown-menu">
            {options.map((option)=>{
                return (
                    <div 
                        onClick={()=> onItemClick(option)}
                        className={`dropdown-item ${isSelected(option) && 'selected'}`}
                        key={option.value}
                    >
                        {option.label}
                    </div>
                )
            })}
        </div>
      )}
    </div>
  );
};

export default DropdownTheme;

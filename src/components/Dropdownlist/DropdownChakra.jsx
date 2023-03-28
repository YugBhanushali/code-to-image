import React, { useEffect, useState } from 'react'
import { Select } from '@chakra-ui/react'
import { FontFamilyList } from '../../constants/Constants'
import { useDispatch } from 'react-redux';
import { changecanvasPadding, changecanvasWidth,changecodeLanguage, changeFontTheme, changesnippetFontFamily } from '../../redux/CanvasConfigSlice';

const DropdownChakra = ({optionsList , typeList, placeholder,width}) => {
  const [selectedOption, setselectedOption] = useState({label:'Select...',value:'Select...'});
  const dispatch=useDispatch();
  useEffect(() => {
    console.log(selectedOption);
  }, [selectedOption]);

  const handleChange = (e) => {
    if(typeList==='font'){
      setselectedOption({label:e.target.value,value:e.target.value});
      dispatch(changesnippetFontFamily(e.target.value));
    }
    else if(typeList==='padding'){
      setselectedOption({label:e.target.value,value:e.target.value});
      dispatch(changecanvasPadding(e.target.value));
    }
    else if(typeList==='language'){
      setselectedOption({label:e.target.value,value:e.target.value});
      dispatch(changecodeLanguage(e.target.value));
    }
    else if(typeList==='theme'){
      setselectedOption({label:e.target.value,value:e.target.value});
      dispatch(changeFontTheme(e.target.value));
    }
    else if(typeList==='width'){
      setselectedOption({label:e.target.value,value:e.target.value});
      dispatch(changecanvasWidth(e.target.value));
    }
  };

  
  return (
    <div>
      <Select marginLeft={18} cursor='pointer' iconColor='white' iconSize={10} width={width} onChange={(e)=>{handleChange(e);console.log(e.target.value)}} background='rgba(17, 17, 17, 0.42)' outline='none' icon='none' rounded='3px' _active='none' height='31px' fontSize='13px' border='1px solid rgba(98, 83, 83, 0.82)' placeholder={placeholder}>
        {optionsList.map((font, index) => {
          return (
            <option key={index} value={font.value}>
              {font.label}
            </option>
          );
        }
        )}
      </Select>
    </div>
  )
}

export default DropdownChakra

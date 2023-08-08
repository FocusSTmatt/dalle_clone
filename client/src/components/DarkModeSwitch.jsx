import { useState, useEffect } from "react";
import Switch from "react-switch";
import { BsSunFill } from "react-icons/bs"
import { BsMoonFill } from "react-icons/bs"

function DarkModeSwitch() {

  useEffect(() => {
    if(localStorage.getItem({theme: null})){
      localStorage.setItem({theme: "light"})
    }
  }, [])

   const [checked, setChecked] = useState(false)
   const handleSwitch = () => {
    setChecked(!checked)
   } 
  
   return (
    <div className="flex justify-center items-center align-middle">
       <h5><BsMoonFill size={20} style={!checked ? {color: "#FFC000"} : {color: "black"} } /></h5>
        <Switch
            height={20}
            activeBoxShadow='0 0 2px 3px #FFC000'
            onColor="#FFC000"
            offColor="#000"
            className="m-1" 
            onChange={handleSwitch} 
            checked={checked} 
            checkedIcon={false}
            uncheckedIcon={false}
        /> 
        <h5><BsSunFill size={20} style={checked ? {color: "#FFC000"} : {color: "black"} } /></h5>
    </div>
  )
}

export default DarkModeSwitch
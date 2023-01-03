import React from "react";
const ButtonPran = (props) => {
    const handleClick = (event) => {
        props.saveData(event.target.value);
    }
return(
    <div className="Pran-button">
        <input onClick={handleClick} type="button" value={props.label}/>
    </div>
 )
};
export default ButtonPran;
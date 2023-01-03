import React from "react";
const CalculatorBox = (props) =>{
    return(
        <div className="Pran-box">
            <input  class="summary" type="text" value={props.value}/>
        </div>

    );
};
export default CalculatorBox;
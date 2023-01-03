import React from "react";
import NewInsuranceForm from "./NewInsuranceForm";
import './NewInsurance.css';
const NewInsurance=(props)=>{
    const saveInsuranceData=(enteredIdata)=>{ 
        const InsuranceData={
            ...enteredIdata,
            id:Math.random().toString()
        };
        props.onaddInsurance(InsuranceData);
    }


    return(
    <div className="new-insurance">
       <NewInsuranceForm  onsaveInsurance={saveInsuranceData}  /> 
    </div>
    );

};
export default NewInsurance;
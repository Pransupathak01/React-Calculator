//import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
const NewInsuranceForm=(props)=>{
    const[name,setNamechange]=useState('')
    const[vehicle,setVehiclechange]=useState('')
    const[amount,setAmountchange]=useState('')
    const[date,setDatechange]=useState('')
     
    const nameChangeHandler=(event)=>{
        setNamechange(event.target.value)
    };
    const vehicleChangeHandler=(event)=>{
       setVehiclechange(event.target.value)
    };
    const amountChangeHandler=(event)=>{
        setAmountchange(event.target.value)
    };
    const dateChangeHandler=(event)=>{
        setDatechange(event.target.value)
    };
    const submitHandler=(event)=>{
        event.preventDefault();
        const InsuranceData={
            name:name,
            amount:amount,
            vehicle:vehicle,
            date:new Date(date)
        };
        props.onsaveInsurance(InsuranceData);
        setNamechange('');
        setVehiclechange('');
        setAmountchange('');
        setDatechange('');

    };
    return(
        <form onSubmit={submitHandler}>
              <div className="NewInsurance-form">
                    <label>Name</label>
                    <input type="text" value={name} onChange={nameChangeHandler}/>
                </div>

                <div className="NewInsurance-form">
                    <label>Vehical</label>
                    <input type="text" value={vehicle} onChange={vehicleChangeHandler}/>
                </div>

                <div className="NewInsurance-form">
                    <label>Amount</label>
                    <input type="number" value={amount} onChange={amountChangeHandler} />
                </div>

                <div className="NewInsurance-date">
                    <label>Date</label>
                    <input type="date" value={date} onChangeCapture={dateChangeHandler} />
                </div>
                <div className="new-submit">
                    <label>submit</label>
                    <input type="submit" />
                </div>
        </form>
    );
};



export default NewInsuranceForm;
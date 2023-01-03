import React, { useState } from 'react';
function InsuranceList( props ) {
   const year= props.date.getFullYear();
   const month=props.date.toLocaleString('en-US',{month:'long'});
   const day=props.date.toLocaleString('en-US',{day:'2-digit'});
   
    // const [name, updateName] = useState(props.name);
    // function changeName( ){
    //     updateName( 'raj' );
    // };
    const[name,setName]=useState(props.name);
    
    console.log('InsuranceList evaluted by React ');
    
     const clickName=()=>{
      setName('atharv');
      console.log(name);
     };
     
    return(
          <div className="insurance-row">
            <div className="insurance-date">
               <div className="Insurance-date-day">{day}</div>
               <div className="Insurance-date-month">{month}</div>
               <div className="Insurance-date-year">{year}</div>
            </div>
            
            
            <div className="insurance-name">
               {name}
              
            </div>
            <div className="insurance-vehicle">
                {props.vehicle}
            </div>
            <div className="insureance-amount">

                ${props.amount} 
            </div>
           
            <button  className="button" onClick={clickName}>change Name</button>
          </div>  
        
     
    );
}
export default InsuranceList;
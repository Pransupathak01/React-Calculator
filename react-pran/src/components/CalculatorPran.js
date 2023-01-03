import React,{useState} from "react";
import ButtonPran from "./ButtonPran";
import CalculatorBox from "./CalculatorBox";
const CalculatorPran = () => {
    const[data,setData] = useState(0);
    const saveCalculatorData = (calculatorvalue) =>{
        console.log(calculatorvalue);

        var reponsevalue = 0;
        if("=" === calculatorvalue){
            console.log("stored");
            reponsevalue = eval(data);
        
        }
        else if("Delete" === calculatorvalue){
            var str=data;
             str = str.substr(0,str.length-1);
             console.log(str);
             reponsevalue =str;
            }else {
                if( data ===  0 ){
                   reponsevalue =  calculatorvalue; 
                } else {
                if("Clear" === calculatorvalue){
                    reponsevalue = 0;
                }else{
                 reponsevalue = data + calculatorvalue;
                }
                }
            }

        setData(reponsevalue);

    };
    return(
        <div className="Pran-calculator">
            <div className="mainCalc">
             <CalculatorBox value={data}/>
             <div className="Pran-button">
             <div className="button">
              <ButtonPran label={'Delete'} saveData={saveCalculatorData}/>
              <ButtonPran label={'Clear'} saveData={saveCalculatorData} />
              <ButtonPran label={'='} saveData={saveCalculatorData}/>
             </div>
             <div className="button">
              <ButtonPran label={'1'} saveData={saveCalculatorData} />
              <ButtonPran label={'2'} saveData={saveCalculatorData}/>
              <ButtonPran label={'3'} saveData={saveCalculatorData}/>
              <ButtonPran label={'+'} saveData={saveCalculatorData}/>
             </div>
             <div className="button">
               <ButtonPran label={'4'}  saveData={saveCalculatorData}/>
               <ButtonPran label={'5'} saveData={saveCalculatorData}/> 
               <ButtonPran label={'6'} saveData={saveCalculatorData}/>
               <ButtonPran label={'-'} saveData={saveCalculatorData}/>
             </div>
             <div className="button">
               <ButtonPran label={'7'} saveData={saveCalculatorData}/>
               <ButtonPran label={'8'} saveData={saveCalculatorData}/>
               <ButtonPran label={'9'} saveData={saveCalculatorData}/>
               <ButtonPran label={'*'} saveData={saveCalculatorData}/>
             </div>
             <div className="button">
               <ButtonPran label={'.'} saveData={saveCalculatorData}/>
               <ButtonPran label={'0'} saveData={saveCalculatorData}/>
               <ButtonPran label={'/'} saveData={saveCalculatorData}/>
              </div>
              </div>   
            </div>
        </div>
    )
};
export default CalculatorPran;
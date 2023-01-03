import React from 'react';
//import React, { useState } from 'react';
import './App.css';
import NewInsurance from './components/NewInsurance/NewInsurance';
import Header from './components/header';
import Footer from './components/Footer';
//import InsuranceForm from './components/InsuranceForm';
import PrimaryData from './components/PrimaryData';
import InsuranceList from './components/InsuranceList';
function App(){
  const defaultData = [
    {
      id : 1,
      name : 'Atul pathak',
      date : new Date(2022,10,10),
      vehicle : 'Car',
      amount : 30
    },
    {
      id : 2,
      name : 'pransu pathak',
      date : new Date(2010,10,10),
      vehicle : 'Bike',
      amount: 33
    },
    {
      id : 3,
      name : 'Atharav pathak',
      date : new Date(2022,10,10),
      vehicle : 'Bus',
      amount: 5
    },
    {
      id : 4,
      name : 'Chitralekha pathak',
      date : new Date(2021,10,10),
      vehicle : 'Taxi',
      amount: 9
    },
  ];
  const addInsurance=defaultData=>{
    console.log('In App.js');
    console.log(defaultData);
  }
  
  return (
    <div className="App">
      <Header />
      <NewInsurance onaddInsurance={addInsurance}/>
      <PrimaryData />
      <InsuranceList
        date={defaultData[0].date}
        name={defaultData[0].name}
        vehicle={defaultData[0].vehicle}
        amount={defaultData[0].amount}
      />
      <InsuranceList
        date={defaultData[1].date}
        name={defaultData[1].name}
        vehicle={defaultData[1].vehicle}
        amount={defaultData[1].amount}
      />
      <InsuranceList
        date={defaultData[2].date}
        name={defaultData[2].name}
        vehicle={defaultData[2].vehicle}
        amount={defaultData[2 ].amount}
        />
      <InsuranceList
        date={defaultData[3].date}
        name={defaultData[3].name}
        vehicle={defaultData[3].vehicle}
        amount={defaultData[3].amount}
      />
      <Footer />
    </div>
  );
  
}
 
export default App;

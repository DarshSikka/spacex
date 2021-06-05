import React from 'react';
import '../Details.css'
import {BrowserRouter as Router, Redirect} from 'react-router-dom';
const details=(Data)=>{
    if(!Data.det.rocket){
        alert("You came here without choosing a space mission. Come back from home!")
        return(<Redirect to="/" />)
    }
   const details=Data.det.details;
   const heading=`${Data.det.rocket} Going on ${Data.det.name}`;
       return(
       <Router>
       <center>
           <h1>Details for {heading}</h1>
           <div>
               <p>
                   {
                       details
                    }
                    <br />
                    This is scheduled on {Data.det.date_local}<br />
                    {console.log(Data.det.links.patch.small)} 
                    <img style={{width:"200px", height:"200px"}}src={Data.det.links.patch.small}/>
                    <br />
                    <button onClick={()=>alert(Data.det.launchpad)}>Show Launchpad</button>
                    <button onClick={()=>alert(Data.det.payloads.join(","))}>Show Payloads</button>
                    <button onClick={()=>alert(Data.det.capsules.join(","))}>Show Capsules</button>
                    <button onClick={()=>alert(`The flight number is ${Data.det.flight_number}`)}>Show Flight Number</button>
                    <button onClick={()=>alert(JSON.stringify(Data.det.cores[0]))}>Show Cores</button>
               </p>
               <a id="gohome"href="/">Home</a>
           </div>
       </center>
       </Router>
   )
   }
export default details;
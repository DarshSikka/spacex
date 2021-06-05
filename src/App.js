import logo from './logo.svg';
import Details from './Components/Details';
import React, {useState} from 'react';import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
  const fetchD=async(type)=>{
    const url=`https://api.spacexdata.com/v4/launches/${type}`
    const result=await fetch(url);
    const json=await result.json();
    return await json;
  }
  const App=()=>{
    const [data, setData]=useState([]);
    const [maind, setMaind]=useState({});
    const [current, setCurrent]=useState("nothing");
    const buttonStyle={
      marginTop:"30px", 
      backgroundColor:"peachpuff",
      height:"40px", 
      fontSize:"1.5rem"};
    return (
      <Router>
      <Switch>
        <Route path='/' exact>
        <div className="App">
        <h1>SpaceX launches</h1>
        <h3><i>Click on a link to get its details</i></h3>
        <button style={buttonStyle} onClick={()=>{fetchD('upcoming').then(d=>{
          setData(d);
          setCurrent(true);
        })}}>Upcoming</button><br />
        
        <button onClick={()=>{fetchD('past').then(d=>{
          setData(d);
          setCurrent(false);
        })}}style={buttonStyle}>Previous</button>
<br />
<i style={{display:current==="nothing"?"none": ""}}>{current?"Upcoming Events":"Previous Events"}</i>
        <ul style={{listStyleType:"none"}}>
          {data.map(ele=><div>
            <button style={{backgroundColor:"transparent", border:"0"}}onClick={()=>setMaind(ele)}><Link to={'/details'}key={data.indexOf(ele)}>{`${ele.rocket} going on ${ele.name}`}</Link></button><br /></div>)}
        </ul>
      </div>
        </Route>
        <Route path="/details">
            <Details det={maind}/>
        </Route>
      </Switch>
      </Router>
    )
}
export default App;
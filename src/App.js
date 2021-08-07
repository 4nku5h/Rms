import logo from './logo.svg';
import './App.css';
import Questions from './Questions';
import React, { useEffect } from 'react';
import Nav from './Nav';
const api_url='https://raw.githubusercontent.com/4nku5h/Quiz-App/main/api.json';

function App() {  
  const [dataFromApi, setData] = React.useState(null);
   useEffect(()=>{
    fetch(api_url)
    .then((response)=>{
      return response.json();
    })
    .then((data)=>{
      setData(data);
    });
   },[])

    if (dataFromApi==null) return null;
  return (
    <div className="App">
        <Nav/>
        <Questions {...dataFromApi}/>
    </div>
  );
}


//<MyInfo />
//<TicketComponent {...dataFromApi}/>
export default App;

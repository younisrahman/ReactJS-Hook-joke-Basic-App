import React, {useState, useEffect} from 'react'
import './App.css';


// http://api.icndb.com/jokes/random?firstName=John&lastName=Doe
function App() {

  const [joke,setJoke] = useState("loading")
  const [fname,setFname] = useState("John")
  const [lname,setLname] = useState("Doe")

  const newjoke =(firstName,lastName)=>{
    fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`).
    then(res => res.json())
    .then(res2 => {
      console.log(res2)
      setJoke(res2.value.joke)
    })
  }

  useEffect(() => {
    newjoke(fname,lname)
  // }, [])
  }, [fname,lname])
  return (
    <div className="App">
      <h1>This is basic joke app</h1>
      <input type="text" value={fname} onChange={(e)=>setFname(e.target.value)}/>
      <input type="text" value={lname} onChange={(e)=>setLname(e.target.value)}/>
      <button onClick={()=>newjoke(fname, lname)}>get new joke</button>
      <h4>{joke}</h4>
    </div>
  );
}

export default App;


import './App.css';
import Example from './components/Example';
import Random from './components/Random';
import User from './components/User';

function App() {
  const subject ='REACT'
const username = "        "
  const btnstyle={padding:'10px', backgroundColor:'black', color:'white',borderRadius:'10px',margin:'30px'}

  const show =()=>{
    alert('button clicked')
  }
  const add = (user)=>{
    alert(`${user} is added!!`)
  }
 const  getname=(e)=>{
    console.log(e.target.value);
  }
  return (
   <>
     <h1 style={{textAlign:'center',color:'blue'}}>Heading</h1>
      <div className="App">
          <h3>course : {subject}</h3>
          <button onClick={show} style={btnstyle}>Click</button>
          <button onClick={()=>add('Maxwell')} style={btnstyle}> Add</button>
           <div>
            <input onChange={(e)=>getname(e)} type="text" style={{padding:'10px',borderRadius:'10px',width:'400px',margin:'30px'}} placeholder='enter username' />
           </div>
          
          <h2>All child components</h2>
          <ul>
            <li><Example subject={subject}/> <User username={username} age="27" /> </li>
            <li><Random/></li>
          </ul>
      </div>
   </>
  );
}

export default App;

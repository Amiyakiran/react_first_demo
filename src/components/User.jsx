import React from 'react'

function User(props) {
  console.log(props);
  const divStyle = {
    backgroundColor : 'yellow',
    textAlign : 'center',
    padding:'10px',
    marginTop:'40px'
  }
  return (
    <div>
  { props.username==='Max Miller'?     
    <h3 style={divStyle}>inside user component : data from parent: {props.username} and age is : {props.age}</h3>
    : <p  style={divStyle}> User not found</p>
   }   

 </div>
  )
}

export default User
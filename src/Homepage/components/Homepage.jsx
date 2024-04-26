
import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';

const Homepage = () => {

const [change,setChange]=useState(false)
const handleNameChange = ()=>{
    setChange(!change)
}
  return (
    <>
    <div>Homepage</div>
     <Button  onClick={handleNameChange}>Change the text here</Button>
    <div>
        {!change ? "not changed" : "changed"}
    </div>
    </>
  )
}

export default Homepage
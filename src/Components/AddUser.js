import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import Base from './Base'
import { AppCon } from './AppProvider'

function AddUser() {
   const {user , setUser}=AppCon()
  const history = useHistory()
  const [id, setId]=useState('')
  const [name , setName]=useState('')
  const [dob , setDob]= useState('')
  const [age , setAge]=useState('')
  const adding=()=>{
    const newUser={
      id,
      name,
      dob,
      age
    }
setUser ([...user, newUser])
history.push('/')
  }
  return (
    <Base tittle="Add Student Details">
      <div className="adduser-style container">
        <input
        placeholder="id"
        value={id}
        onChange={(event)=>setId(event.target.value)}/>
      <input 
      placeholder="Name"
      value={name}
      onChange={(event)=>setName(event.target.value)}
      />
      <input placeholder="Dob"
      value={dob}
      onChange={(event)=>setDob(event.target.value)}/>
      <input placeholder="Age"
      value={age}
      onChange={(event)=>setAge(event.target.value)}
      />
      <Button className="adduser" onClick={adding} varient="dark">Add</Button>
      </div>
    </Base>
  )
}

export default AddUser
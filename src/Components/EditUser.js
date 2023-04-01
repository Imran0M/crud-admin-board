import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router-dom'
import Base from './Base'
import { AppCon } from './AppProvider'

function EditUser() {
  const {user, setUser}=AppCon()
    const history = useHistory()
    const [name , setName]=useState('')
    const [dob , setDob]= useState('')
    const [age , setAge]=useState('')
    const {id} =useParams()
    // console.log(id)
    const selectedUser =user.find((student)=>student.id === id)
    // console.log(selectedUser)
   useEffect(()=>{
      setName(selectedUser.name)
      setDob(selectedUser.dob)
      setAge(selectedUser.age)
   },[])

   const updateUser=()=>{
    const getIndex=user.findIndex(stud=>stud.id ===id)
    console.log(getIndex)
    const editedUser={
        name,
        dob,
        age,
    }
    console.log(editedUser)
    user[getIndex]=editedUser
    setUser([...user])
    history.push('/')
   }
  return (
    <Base tittle="Edit user">
         <div className="adduser-style container">
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
      <Button onClick={updateUser}className="adduser"  varient="dark">Update user</Button>
      </div>
    </Base>
  )
}

export default EditUser
import React from 'react'
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';


function Base({tittle, children}) {
    const history=useHistory();
  return (
    <div className="App">
        <div className='nav'>
        <Button  onClick={()=>history.push('/')} className="btn" variant="secondary">Student details</Button>
        <Button  onClick={()=>history.push('/add/user')}className="btn" variant="dark">Add Student</Button>
        <Button onClick={()=>history.push('/teacher/details')}variant="secondary">Teacher details</Button>
        <Button onClick={()=>history.push('/add/teacher')} variant="dark">Add Teacher</Button>
        
        </div>
        <h2>{tittle}</h2>
        <div>{children}</div>
    </div>
  )
}

export default Base;
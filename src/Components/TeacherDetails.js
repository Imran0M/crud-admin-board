import React from 'react'
import Base from './Base'
import Table from 'react-bootstrap/Table';
import { useHistory } from 'react-router-dom';



function TeacherDetails({teacher, setTeacher}) {
  const history = useHistory()
    const deleteTeacher=(idx)=>{
        const deleted = teacher.filter((teach) =>teach.id !== idx)
        // console.log(deleted)
        setTeacher(deleted)
    }
    
    
    return (
        <Base tittle="Teacher Details">
           <div className="container">
            {teacher.map((teacher ,id)=>(
                <div key={id}>
                <Table striped bordered hover variant="dark">
                       <thead>
                         <tr>
                           <th className="col-3">Name</th>
                           <th className="col-3" >Department </th>
                           <th className="col-3">Qualification</th>
                           <th className="col-3">Operation</th>
                         </tr>
                       </thead>
                       <tbody>
                         <tr>
                           <td>{teacher.teachername}</td>
                           <td>{teacher.department}</td>
                           <td>{teacher.qualification}</td>
                           <td>
                               <div>
                               <button onClick={()=>deleteTeacher(teacher.id)} className="delete-btn"> Delete </button>{' '}
                               <button onClick={()=>history.push(`/ed/${teacher.id}`)} className="edit-btn" >Edit </button>{' '}
                               </div>
                           </td>
                         </tr>
                       </tbody>
                     </Table>
                     
                     </div>
            )
              
            )}
           </div>
                 
        </Base>
    )
}

export default TeacherDetails
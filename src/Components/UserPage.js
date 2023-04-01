import Base from './Base'
import Table from 'react-bootstrap/Table';
import { useHistory } from 'react-router-dom';
import { AppCon } from './AppProvider';

function UserPage() {
  const {user, setUser}=AppCon()
    const deleteUser=(idx)=>{
      const deletedUser = user.filter((student)=>student.id !== idx)
    setUser(deletedUser)
    }
    const history = useHistory()
   
  return (
   <Base
   tittle="USER DETAILS">
    <div className="container">

   {user.map((student, id)=>(
    <div key={id}>
 <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th className="col-3">Name</th>
            <th className="col-3" >DOB </th>
            <th className="col-3">AGE</th>
            <th className="col-3">Operation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{student.name}</td>
            <td>{student.dob}</td>
            <td>{student.age}</td>
            <td>
                <div>
                <button onClick={()=>deleteUser(student.id)} className="delete-btn"> Delete User</button>{' '}
                <button onClick={()=>history.push(`edit/${student.id}`)} className="edit-btn" >Edit User</button>{' '}
                </div>
            </td>
          </tr>
        </tbody>
      </Table>
      
      </div>
   
   ))}
   </div>
   </Base>
  )
}

export default UserPage
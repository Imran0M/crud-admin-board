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
      <Table>
      <thead>
          <tr>
            <th className="col-3">Name</th>
            <th className="col-3" >DOB </th>
            <th className="col-3">AGE</th>
            <th className="col-3">Operation</th>
          </tr>
        </thead>
      </Table>

   {user.map((student, id)=>(
    <div key={id}>
 <Table >
       
        <tbody>
          <tr>
            <td className="col-3" >{student.name}</td>
            <td className="col-3">{student.dob}</td>
            <td className="col-3">{student.age}</td>
            <td className="col-3">
                <div>
                <button className="add-btn" onClick={()=>history.push('/add/user') }>Add </button>{' '}
                <button onClick={()=>history.push(`edit/${student.id}`)} className="edit-btn" >Edit </button>{' '}
                <button onClick={()=>deleteUser(student.id)} className="delete-btn"> Delete </button>{' '}
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
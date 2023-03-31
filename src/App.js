import './App.css';
import UserPage from './Components/UserPage';
import { Switch, Route } from 'react-router-dom';
import { Data } from './Components/Data/Data';
import { useState } from 'react';
import AddUser from './Components/AddUser';
import EditUser from './Components/EditUser';
import AddTeacher from './Components/AddTeacher';
import TeacherDetails from './Components/TeacherDetails';
import { DataTwo } from './Components/DataTwo/DataTwo';
import EditTeacher from './Components/EditTeacher';


function App() {
  const [user, setUser] = useState(Data)
  const [teacher, setTeacher]=useState(DataTwo)
  // console.log(DataTwo)
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <UserPage
            user={user}
            setUser={setUser}
          />
        </Route>

        <Route path='/add/user'>
          <AddUser
            user={user}
            setUser={setUser} />
        </Route>
        <Route path='/edit/:id'>
          <EditUser 
           user={user}
           setUser={setUser} 
          />
        </Route>
        <Route path='/add/teacher'>
          <AddTeacher 
           teacher={teacher}
           setTeacher={setTeacher}/>
        </Route>
        <Route path='/teacher/details'>
         <TeacherDetails 
         teacher={teacher}
         setTeacher={setTeacher}/>
        </Route>
        <Route path='/ed/:id'>
         <EditTeacher
         teacher={teacher}
         setTeacher={setTeacher}
       />
        </Route>



      </Switch>

    </div>
  );
}

export default App;

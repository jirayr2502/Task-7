import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { AddUser } from './components/addUser';
import { UserList } from './components/userList';
import './App.css'
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  const [users, setUsers] = useState([]);

  const handleAddUser = (user) => {
    const { password, ...userInfo } = user;
    setUsers((prevUsers) => [...prevUsers, userInfo]); 
    toast.success('User added successfully!',{
      position: "top-right", // Որտեղ պետք է հայտնվի Toastify ծանուցումը
      autoClose: 3000, // Հակառող 3000 միլիվայրկյանից հետո փակվում է
      hideProgressBar: false, // Ցույց տալ Progress Bar-ը
      closeOnClick: true, // Փակվում է click-ով
      pauseOnHover: true, // Պաուզ է անում երբ նշատում են
      draggable: true, // Հնարավորություն է տալիս տեղափոխել ծանուցումը
      progress: undefined, // Progress Bar-ի լռելյայն կարգավորում
    }); 
  };

  return (
    <div>
      <h1>User Management</h1>
      <AddUser onAddUser={handleAddUser} />
      <UserList users={users} />
      <ToastContainer />
    </div>
  );
};

export default App;


import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Public from "./Components/Public";
import Login from "./features/auth/Login";
import DashLayout from "./Components/DashLayout";
import Welcome from "./features/auth/Welcome";
import UsersList from "./features/users/UsersList";
import "./App.css";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public/>}/>
        <Route path="login" element={<Login />}/>

        <Route path="dash" element={<DashLayout/>}>
          <Route index element={<Welcome />}/>
          
          <Route path="users" element={<UsersList/>} />{/**new ver code,check scrns */}
            
          




          </Route>{/**end dash here */}
        </Route>
        
      
    </Routes>
  );
}

export default App;

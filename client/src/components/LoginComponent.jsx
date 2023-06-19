import React from 'react'
import NavComponent from './NavComponent'
import { useState,useEffect } from 'react';
import Swal from 'sweetalert2'
import axios from 'axios'
import { authenticate } from '../service/authorize';
import { useNavigate } from 'react-router-dom';


function LoginComponent() {
    const [state,setState] = useState({
        username:"",
        password:"",
       
    })
    
const {username,password} = state 


const API = "http://localhost:5500/api";

const inputValue =name=>event=> {
    setState({...state,[name]:event.target.value})
}

const navigate = useNavigate();
const submitForm = async (e) => {
    e.preventDefault();
    axios.post(`${API}/login`, { username, password })
      .then(response => {
        console.log(response);
        authenticate(response, () => {
            navigate('/create');
        });
      })
      .catch((err) => {
            Swal.fire('แจ้งเตือน', 'รหัสผ่านไม่ถูกต้อง', 'error');
      })
  };
  useEffect(() => {
    if(sessionStorage.token) {
        navigate('/')
    }
  },[])
  

  return (
    <div className='container p-5'>
    <NavComponent/>
    <h1>เข้าสู่ระบบ | admin</h1>
    <hr />
    <form onSubmit={submitForm} >
        <div className="form-group">
              <label>Username</label>
               <input style={{width:"40%"}} value={username} onChange={inputValue("username")} type="text"  className="form-control" />
        </div>
        <br />
        <div className="form-group">
              <label>Password</label>
               <input style={{width:"40%"}} value={password} onChange={inputValue("password")} type="password" className="form-control" />
        </div>
        <br />
        <input  style={{marginRight:"5px"}} type="submit" value="เข้าสู่ระบบ" className="btn btn-primary" />  
    </form>
</div>
  )
}

export default LoginComponent
import {useEffect, useState} from "react"
import axios from "axios";
import { Button } from 'react-bootstrap';
import axiosInstance from "../axiosApi";
import { useNavigate } from "react-router-dom";


const Logout = () => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('access_token') !== null) {
      setIsAuth(true);
    }
  }, [isAuth]);

  const submit = async e => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/blacklist/', {
        'refresh_token': localStorage.getItem('refresh_token')
      });
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      axiosInstance.defaults.headers['Authorization'] = null;
      navigate('/login');
      return response;

    }
    catch (error) {
      console.log(error);
    }
}
    return (
       <form onSubmit={submit}>
        {isAuth ? <button type="submit" className="btn btn-primary">Log Out</button> : null}
            
       </form>
     )
}

export default Logout;
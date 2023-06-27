// Import the react JS packages 
import axios from "axios";
import {useState} from "react";
import  axiosInstance  from "../axiosApi";
// Define the Login function.

const Signin = () => {
     const [username, setUsername] = useState('');
     const [password, setPassword] = useState('');
     const [email, setEmail] = useState('');
     // Create the submit method.
     const submit = async e => {
          e.preventDefault();
          try {
            const response = await axiosInstance.post('/user/create/', {
              username: username,
              email: email,
              password: password
            });
            return response
          }catch(error) {
            console.log(error.stack);

          }

    }
    return(
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={submit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Register</h3>
            <div className="form-group mt-3">
              <label>Username</label>
              <input className="form-control mt-1" 
                placeholder="Enter Username" 
                name='username'  
                type='text' value={username}
                required 
                onChange={e => setUsername(e.target.value)}/>
            </div>
            <div className="form-group mt-3">
              <label>Email</label>
              <input className="form-control mt-1" 
                placeholder="Enter email" 
                name='username'  
                type='text' value={email}
                required 
                onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input name='password' 
                type="password"     
                className="form-control mt-1"
                placeholder="Enter password"
                value={password}
                required
                onChange={e => setPassword(e.target.value)}/>
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" 
                 className="btn btn-primary">Submit</button>
            </div>
          </div>
       </form>
     </div>
     )
}

export default Signin;
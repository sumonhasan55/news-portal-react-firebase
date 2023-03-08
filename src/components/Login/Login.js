import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext/AuthProvider';


const Login = () => {

    const { user, logInUser} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const [error,setError]=useState('');
 
    const from =location.state?.from?.pathname || '/';

 const handleSubmitForm = event =>{
    event.preventDefault()
    const form = event.target;
  
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password)
   logInUser(email,password)
    .then((result)=>{
        const user=result.user;
        console.log(user)
        form.reset()
        setError('');
        navigate(from,{replace:true});
    })
    .catch((error)=>{
        setError(error.message)
    })
   
   

 }

    return (
        <div>
            <h1>LogIn Now!</h1>
    <Form onSubmit={handleSubmitForm}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' />
      </Form.Group>
      <Button variant="primary" type="submit">
        LogIn
      </Button>
      <Form.Text className="text-danger ms-2">
        {error}
        </Form.Text>      
      
    </Form>
    <Link to='/register'><small>Create a New Account</small> </Link>
            
        </div>
    );
};

export default Login;
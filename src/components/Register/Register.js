import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext/AuthProvider';
import TearmsAndCondition from '../Others/TearmsAndCondition';



const Register = () => {
    const { user, createUser,updateUserProfile,emailVerification } = useContext(AuthContext)
    const [error,setError]=useState('');
    const [accept,setAccept]=useState(false);
    const navigate = useNavigate()
    const handleSubmitForm = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoURL =form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user)
                setError('');
                form.reset()
                handleUpdateUserProfile(name,photoURL)
                handleEmailVerification()
                toast.success('Email Verification send')
                if(user.emailVerifie){
                    navigate('/')
                }
                else{
                    toast.error('your Email is not Verifyed!plz veriy and try again!')
                }
               
            })
            .catch((error) => {
                setError(error.message)
            })
    };

    const handleAccepted =(event)=>{
        setAccept(event.target.checked)
        console.log(event.target.checked)

    };

    const handleUpdateUserProfile =  (name,photoURL)=>{
        const profile = {
            displayName:name,
            photoURL:photoURL
        }

        updateUserProfile(profile)
        .then(()=>{

        })
        .catch(()=>{

        })
    };
    const handleEmailVerification =()=>{
        emailVerification()
        .then((result)=>{
            const user = result.user;
            console.log(user)
            
        })
        .catch((error)=>{
          console.log(error)  
        })


    };

    return (
        <div>
            <h3>Register Now!</h3>
            <Form onSubmit={handleSubmitForm}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" required/>

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>PhotoURL</Form.Label>
                    <Form.Control type="text" name='photoURL' placeholder="Enter photoURL" optional/>

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" onClick={handleAccepted} 
                    label={<>
                    Accept<Link to='/terms'>Terms And Conditions</Link>
                    </>} />
                </Form.Group>

                <Button variant="primary" type="submit" disabled={!accept}>
                    Register
                </Button>
                <Form.Text className="text-danger ms-2">
        {error}
        </Form.Text>      
            </Form>
            <Link to='/login'><p>Already have an account go to login </p></Link>

        </div>
    );
};

export default Register;
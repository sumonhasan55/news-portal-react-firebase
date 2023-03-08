import React, { useContext } from 'react';
import { Button, Carousel } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook,FaTwitter,FaTwitch,FaInstagram } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import CarrouSel from '../BrandCarosel/CarrouSel';
import { AuthContext } from '../../context/AuthContext/AuthProvider';


const RighrNav = () => {
    const {signInWithGoogle,signInWithGitHub} = useContext(AuthContext);

    const handleGoogleSignIn = ()=>{
        signInWithGoogle()
        .then((result)=>{
            const user = result.user;
            console.log(user) 
        })
        .catch((error)=>{
            console.erroe(error);
        })
    };
    const handleGitSignIn =()=>{
        signInWithGitHub()
        .then((result)=>{
            const user = result.user;
            console.log(user) 
        })
        .catch((error)=>{
            console.erroe(error);
        })

    }
    return (
        <div>
            <div className="mt-2">

                <ButtonGroup vertical>
                    <Button variant="outline-primary" onClick={handleGoogleSignIn} className='mb-3'><FaGoogle></FaGoogle>  Signin With Google</Button>
                    <Button variant="outline-primary" onClick={handleGitSignIn} className='mb-3'><FaGithub></FaGithub>  Signin With GitHub</Button>
                </ButtonGroup>
            </div>
            <div className="">
                <h5 className='my-3'>Find Us On</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-3' ><FaFacebook/>FaceBook </ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitter/>Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitch/>Twitch </ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaInstagram/>Instagram </ListGroup.Item>
                </ListGroup>
            </div>
            <div className="">
               <CarrouSel></CarrouSel>
            </div>
        </div>
    );
};

export default RighrNav;
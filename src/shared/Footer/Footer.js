import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthProvider';

const Footer = () => {
    const {user}=useContext(AuthContext)
    return (
        <div>
            <h3>Footer @ copyright 2023{user?.displayName}</h3>
            
        </div>
    );
};

export default Footer;
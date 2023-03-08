import React from 'react';
import { Link } from 'react-router-dom';

const TearmsAndCondition = () => {
    return (
        <div>
            <h3>Are You Accepted Our Tearms And Condition!</h3>
            <ul>
                <li>
                    What you can expect from us, which describes how we provide and develop our services
                </li>
                <li>What we expect from you, which establishes certain rules for using our services</li>
                <li>Content in Google services, which describes the intellectual property rights to the content you find in our services — whether that content belongs to you, Google, or others</li>
                <li>In case of problems or disagreements, which describes other legal rights you have, and what to expect in case someone violates these terms</li>
                
            </ul>
            <p>Understanding these terms is important because, by using our services, you’re agreeing to these terms.</p>
            <Link to='/register'>Go Back to Register pages</Link>
            
        </div>
    );
};

export default TearmsAndCondition;
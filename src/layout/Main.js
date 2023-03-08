import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';
import LeftNav from '../shared/LeftNav/LeftNav';
import RighrNav from '../shared/RightNav/RighrNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
           <Container>
            <Row>
                <Col lg='2'>
                    <LeftNav></LeftNav>
                    
                </Col>
                <Col lg='7'>
                    <Outlet></Outlet>

                </Col>
                <Col lg='3'>
                   <RighrNav></RighrNav>

                </Col>
            </Row>
           </Container>
           <Footer></Footer>
            
        </div>
    );
};

export default Main;
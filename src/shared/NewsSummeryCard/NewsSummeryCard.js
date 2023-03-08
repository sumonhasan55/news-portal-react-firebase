import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaBookmark,FaShareAlt,FaStar,FaEye } from "react-icons/fa";

const NewsSummeryCard = ({news}) => {
    const {title,_id,author,details,image_url,total_view,rating}=news;
    return (
        <div className='mb-5'>
          <Card className="">
      <Card.Header>
       <div className="d-flex justify-content-between align-items-center">
         <div className="d-flex">
          <Image 
          className='me-2'
           roundedCircle
          src={author?.img}
          style={{height:'60px'}}
          ></Image>
          <div className="">
            <p className='mb-0'>{author?.name}</p>
            <p>{author?.published_date}</p>
          </div>
        </div>
        <div className="">
          <FaBookmark className='me-2'></FaBookmark>
          <FaShareAlt></FaShareAlt>


        </div>
       </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
         <Card.Img variant="top" src={image_url} />
        <Card.Text>
         {
          details.length > 200 ?
          <p>
            {details.slice(0,250)+'...'}<Link to={`/news/${_id}`}>Read More</Link>
          </p>
          :<p>{details}</p>
         }
        </Card.Text>
       
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
        <div className="">
          <FaStar className='text-warning me-2'>
        </FaStar>
        <span>{rating?.number}</span>
        </div>
        <div className="">
          <FaEye className='me-2'>

          </FaEye>

          <span>{total_view}</span>

        </div>
      </Card.Footer>
    </Card>
            
        </div>
    );
};

export default NewsSummeryCard;
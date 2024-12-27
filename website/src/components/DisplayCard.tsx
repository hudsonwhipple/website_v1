import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
// import React, { useState } from "react";
import "./DisplayCard.css";

interface DisplayCardProps {
    title: string;
    description: string;
    img: string;
    link: string;
}

const DisplayCard: React.FC<DisplayCardProps> = ({ title, description, img, link }) => {

    return (
        // <Card bg="dark" text="white">
        //     <Card.Header >{title}</Card.Header>
        //     <Card.Body>
        //         <Card.Title>{subdesc}</Card.Title>
        //         <Card.Text>
        //             {description}
        //         </Card.Text>
        //         <Button variant="primary">See project repo</Button>
        //     </Card.Body>
        // </Card>

        // <div>
        //     <h3>{title}</h3>
        //     <p>{description}</p>
        // </div>

        <Card 
            // bg="dark" 
            className="display-card"
            text="white" 
            style={{ 
                width: '18rem', 
                margin:"10px auto",
                backgroundColor: 'rgba(42, 42, 42, 0.25)',
                border: '1px solid rgba(99, 99, 99, 0.25)',
                }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text style={{fontSize: '0.5em'}}>
                {description}
            </Card.Text>
            <Button variant="primary" href={link} >See project</Button>
            </Card.Body>
        </Card>
    );
}

export default DisplayCard;
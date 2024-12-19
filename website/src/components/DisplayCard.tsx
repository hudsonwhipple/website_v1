import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
// import React, { useState } from "react";
import "./DisplayCard.css";

interface DisplayCardProps {
    title: string;
    description: string;
}

const DisplayCard: React.FC<DisplayCardProps> = ({ title, description }) => {

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

        <Card bg="dark" text="white" style={{ width: '18rem', margin:"10px auto" }}>
            <Card.Img variant="top" src="logo192.png" />
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                {description}
            </Card.Text>
            <Button variant="primary">See project</Button>
            </Card.Body>
        </Card>
    );
}

export default DisplayCard;
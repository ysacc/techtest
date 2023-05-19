import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../styles/NewCard.css"

const NewCard = () => {
    const [parraf, setParraf] = useState("Search your Ip");

    const handleClick = async () => {
        const response = await fetch("https://api64.ipify.org?format=json");
        const data = await response.json();
        const ip = data.ip;
        setParraf(ip);
    }
    
    return (
        <div className="container">
        <Card className="card" style={{ width: '30rem' }}>
            <Card.Body>
                <Card.Title  className="title">Search your IP</Card.Title>
                <Card.Text className="text-muted">
                    {parraf}
                </Card.Text>
                <Button className="button" variant="primary" onClick={handleClick}>Search</Button>
            </Card.Body>
        </Card>
        </div>
    )
}

export default NewCard;
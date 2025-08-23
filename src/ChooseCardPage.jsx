import React from 'react';
import { cardDetails } from './cardDetails';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router';


export const ChooseCardPage = () => {
    const navigate = useNavigate();
    const cards = Object.entries(cardDetails).map(([name, {title,  description}]) => (
        <Card key={title} title={title} style={{width: '30rem'}} >
            <p>{description}</p>
            <Button onClick={() => {navigate(`/card/${name}`)}}>Upload</Button>
        </Card>
    ))
    
    return (
        <div className="cardList">
            {cards}
        </div>
    )

}
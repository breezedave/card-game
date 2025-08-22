import React from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';
import { FileUpload } from 'primereact/fileupload';
import { Card } from 'primereact/card';
import { cardDetails } from './cardDetails';

export const CardPage = () => {
    const navigate = useNavigate();
    const { cardId } = useParams();
    const { title, description} = cardDetails[cardId] || {};
    
    if(!cardId) navigate('/chooseCard');

    return (
        <Card title={title} style={{margin: '10vh 10vw'}}>
        <p>{description}</p>
        <FileUpload
            name={cardId}
            url={`/api/upload/${cardId}`}
            accept="image/*"
            maxFileSize={20000000}
            emptyTemplate={<span />} />
            </Card>
         
    )

}
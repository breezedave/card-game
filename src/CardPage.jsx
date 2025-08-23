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
        <>
            <Card title={title} style={{margin: '2rem 10vw'}}>
                <p>{description}</p>
                <FileUpload
                    name={cardId}
                    url={`https://cqhqjb2hhtczmnnu6u2zxqj7gy0jctio.lambda-url.eu-west-2.on.aws?cardId=${cardId}`}
                    accept="image/*"
                    maxFileSize={20000000}
                    emptyTemplate={<span />}
                    onUpload={() => {
                        navigate(`/cards/${cardId}`)
                    }}
                />
            </Card>
        </>
    )

}
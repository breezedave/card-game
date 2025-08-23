import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
import { Image } from 'primereact/image';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button'; 
import { cardDetails } from './cardDetails';

export const CardsPage = () => {
    const navigate = useNavigate();
    
    function encodeToken(token) {
        return encodeURIComponent(token);
    }

    const { cardId } = useParams();
    const [selectedCard, setSelectedCard] = useState(cardId);
    const [imageList, setImageList] = useState([]);
    const [firstRequest, setFirstRequest] = useState(false);

    const cardOptions = Object.entries(cardDetails).map(([cardId, {title, description}]) => ({
        cardId,
        title,
        description,
    }));

    useEffect(() => {
        const makeReq = ({token, images}) => {
            axios.get(`https://z7j4d4fyzxx253sgav4gdo2bby0ozjrn.lambda-url.eu-west-2.on.aws${token ? `?token=${encodeToken(token)}` : ''}`).then(({data}) => {
                setFirstRequest(true);
                images = [...images, ...data.items];
                if(data.nextToken) {
                    return makeReq({token: data.nextToken, images});
                }
                setImageList(images);
            })
        };
        makeReq({images: []});
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const filteredImageList = imageList.filter(({key}) => !selectedCard?.length || key.startsWith(`${selectedCard}/`));
                

    const cards = filteredImageList.map(({url}) => {
        const urlCardId = url?.split('/')?.find((val) => val?.startsWith('card'))
        
        return (
            <Card key={url} style={{width: '30rem'}} title={urlCardId ? cardDetails?.[urlCardId]?.title : undefined} >
                <Image src={url} alt="Image" width="100%" />
            </Card>
        )
    });

    const noCards = firstRequest ? (
        <Card key="noCard" style={{width: '30rem'}} title="No Pictures">
            <div style={{marginBottom: '1rem'}}>Be the first to upload a picture {selectedCard?.length ? `for ${cardDetails?.[selectedCard]?.title}`: ''}</div>
            {selectedCard?.length ? (
                <Button onClick={() => {
                    navigate(`/card/${selectedCard}`)
                }}>Upload</Button>
            ) : (
                <Button onClick={() => {
                    navigate('/chooseCard')
                }}>Upload</Button>
            )}
        </Card>
    ): undefined;

    return (
        <>
            <div className='selectControl'>
                <div>View photos for: </div>
                <select defaultValue={cardId || ''} className="selectCard" name="selectCard" onChange={(event) => {
                    setSelectedCard(event.target.value)
                }}>
                    {
                        ([{title: 'All Cards', cardId: ''}, ...cardOptions]).map(({title, cardId}) => <option key={title} value={cardId}>{title}</option>)
                    }
                </select>
            </div>
            <div className="cardList">
                {filteredImageList?.length ? cards: noCards}
            </div>
        </>
    );

}
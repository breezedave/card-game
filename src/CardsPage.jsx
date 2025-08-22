import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { Image } from 'primereact/image';
import { Card } from 'primereact/card';

export const CardsPage = () => {
    const { cardId } = useParams();
    const [imageList, setImageList] = useState([]);

    useEffect(() => {
        axios.get(`https://z7j4d4fyzxx253sgav4gdo2bby0ozjrn.lambda-url.eu-west-2.on.aws${cardId ? `?cardId=${cardId}`: ''}`).then(({data}) => {
            const imgs = data.items.filter(({key}) => !cardId || key.startsWith(`${cardId}/`));
            setImageList(imgs);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cardId || 'a']);

    const cards = imageList.map(({url}) => (
        <Card style={{width: '30rem'}} >
            <Image src={url} alt="Image" width="100%" />
        </Card>
    ))

    return (
        <div className="cardList">
            {cards}
        </div>
    );

}
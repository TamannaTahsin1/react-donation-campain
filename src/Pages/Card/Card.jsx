// import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonateCard from "./DonateCard";

    const Card = () => {   
    // for id using param hook
    const { id } = useParams();
    // to load data loader hook
    const cards = useLoaderData();
    const card = cards?.find((card) => card.id === id);

    
    // const [card, setCard] = useState({});
    // useEffect(() => {
    //    const findCard = cards?.find((card) => card.id === id);
    //     setCard(findCard);
    // }, [id, cards]);

    console.log(card);

    return (
        <div className='container mx-auto'>
        <DonateCard card={card}></DonateCard>
        </div>
    );
    };

export default Card;

/* eslint-disable react/prop-types */
import DonateCards from "./DonateCards";



const Cards = ({results}) => {
    
    return (
        <div className="container md:mx-auto lg:mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ml-10 md:ml-4 mb-28">
            {
                results?.map(card => <DonateCards  key={card.id} card={card} ></DonateCards> )
            }
        </div>
    );
};

export default Cards;
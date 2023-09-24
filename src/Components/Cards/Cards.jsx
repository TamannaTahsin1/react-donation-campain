import Card from "./Card";


const Cards = ({cards}) => {
    console.log(cards)
    return (
        <div className="container mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {
                cards?.map(card => <Card key={card.id} card={card} ></Card> )
            }
        </div>
    );
};

export default Cards;
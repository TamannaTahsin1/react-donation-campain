import { useParams } from "react-router-dom";


const SingleCard = () => {
    const params = useParams()
    console.log(params)
    return (
        <div>
            Single Card
        </div>
    );
};

export default SingleCard;
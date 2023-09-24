/** @format */

import { Link } from "react-router-dom";

const Card = ({card}) => {

    const {id, image, category, title} = card || {}

  return (
    <div>
        <Link to={`/cards/${id}`}>
        <button>
        <div className='card card-compact w-80 bg-base-100 shadow-xl '>
          <figure>
            <img
              src={image}
              alt='images'
            />
          </figure>
          <div className='card-body'>
            <p className="text-sm  p-3 text-start">{category}</p>
            <h2 className='card-title'>{title}</h2>
          </div>
        </div>
      </button>
        </Link>
    </div>
  );
};

export default Card;

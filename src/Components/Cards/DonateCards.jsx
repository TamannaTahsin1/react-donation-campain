/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';


const DonateCards = ({card}) => {
  const {id, image, category, title,div_color, text_color,type_color } = card || {}
      // for colors
      const divColor ={
        backgroundColor: div_color,
      };
      const textColor ={
        color: text_color,
      };
      const typeColor ={
        backgroundColor: type_color
      }

  return (
    <div>
        <Link to={`/cards/${id}`}>
        <button>
        <div className='card card-compact w-80 h-80 bg-base-100 shadow-xl '>
          <figure>
            <img className='w-80 h-64'
              src={image}
              alt='images'
            />
          </figure>
          <div className='card-body' style={divColor}>
            <div className=' border-none w-24 h-10' style={typeColor}>
            <p className="text-sm p-3 text-start font-semibold" style={textColor}>{category}</p>
            </div>
            <h2 className='card-title' style={textColor}>{title}</h2>
          </div>
        </div>
      </button>
        </Link>
    </div>
  );
};


export default DonateCards;
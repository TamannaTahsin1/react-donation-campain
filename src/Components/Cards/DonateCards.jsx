
import { Link } from 'react-router-dom';


const DonateCards = ({card}) => {
  const {id, image, category, title,div_color, text_color } = card || {}
      // for colors
      const divColor ={
        backgroundColor: div_color,
      };
      const textColor ={
        color: text_color,
      };

  return (
    <div>
        <Link to={`/cards/${id}`}>
        <button>
        <div className='card card-compact w-80 bg-base-100 shadow-xl '>
          <figure>
            <img className='w-80'
              src={image}
              alt='images'
            />
          </figure>
          <div className='card-body' style={divColor}>
            <p className="text-sm  p-3 text-start" style={textColor}>{category}</p>
            <h2 className='card-title' style={textColor}>{title}</h2>
          </div>
        </div>
      </button>
        </Link>
    </div>
  );
};


export default DonateCards;
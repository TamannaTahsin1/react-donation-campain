/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

const DonationCard = ({card}) => {

    const { image, price, title, category, div_color, text_color, btn_color,type_color } = card || {};

    // for colors
    const divColor ={
      backgroundColor: div_color,
    };
    const textColor ={
      color: text_color,
    };
    const btnColor ={
      backgroundColor: btn_color
    }
    const typeColor ={
      backgroundColor: type_color
    }

    return (      
         <div className='container w-full h-80 flex justify-around items-center mt-10 '>
      <div className='card card-compact bg-base-100 shadow-xl w-full max-w-2xl'>
        <div className="flex justify-between rounded-lg" style={divColor}>
        <figure>
          <img className="h-80 w-80 object-cover"
            src={image}
            alt='Shoes'
          />
        </figure>
        <div className='card-body mt-10 ml-6'>
        <div className='border-none w-24 h-10 text-center pt-2' style={typeColor}>
          <p className="rounded-b-xl" style={textColor}>{category}</p>
          </div>
          <h2 className='card-title text-xl'>{title}</h2>
          <p className="text-base font-bold" style={textColor}>${price}</p>          
          <button  className='btn w-2/4 text-white border-none' style={btnColor} >View Details</button>
        </div>
        </div>
      </div>
    </div>

    );
};
DonationCard.prototype ={
  card: PropTypes.object.isRequired
}

export default DonationCard;
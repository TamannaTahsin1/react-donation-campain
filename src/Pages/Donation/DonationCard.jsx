const DonationCard = ({card}) => {

    const { image, price, title, category, div_color, text_color, btn_color } = card || {};

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

    return (      
         <div className='container w-full h-96 flex justify-around items-center mt-20'>
      <div className='card card-compact bg-base-100 shadow-xl w-full max-w-2xl'>
        <div className="flex justify-between">
        <figure>
          <img className="h-full w-full object-cover"
            src={image}
            alt='Shoes'
          />
        </figure>
        <div className='card-body mt-10 ml-6' style={divColor}>
          <p className="rounded-b-xl" style={textColor}>{category}</p>
          <h2 className='card-title'>{title}</h2>
          <p className="text-base font-bold" style={textColor}>${price}</p>
          <button  className='btn w-2/4 text-white border-none' style={btnColor} >View Details</button>
        </div>
        </div>
      </div>
    </div>

    );
};

export default DonationCard;
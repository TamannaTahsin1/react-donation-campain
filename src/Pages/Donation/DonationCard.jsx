const DonationCard = ({card}) => {

    const { image, price, title, category } = card || {};

    // for colors

    return (      
         <div className='container w-full h-96 flex justify-around items-center mt-20'>
      <div className='card card-compact w-2/4 bg-base-100 shadow-xl'>
        <div className="flex justify-between">
        <figure>
          <img className="w-72"
            src={image}
            alt='Shoes'
          />
        </figure>
        <div className='card-body mt-10 ml-6'>
          <p className="">{category}</p>
          <h2 className='card-title'>{title}</h2>
          <p>${price}</p>
          <button  className='btn btn-primary '>View Details</button>
        </div>
        </div>
      </div>
    </div>

    );
};

export default DonationCard;
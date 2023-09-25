/** @format */

const DonateCard = ({ card }) => {
  const { id, image, price, title, details } = card || {};

  return (
    <div className='container mx-auto flex justify-center items-center h-[80vh]'>
      <div className='card card-compact w-2/4 bg-base-100 shadow-xl'>
        <figure>
          <img className="w-4/5"
            src={image}
            alt='Shoes'
          />
        </figure>
        <div className='card-actions justify-start ml-24 -mt-20'>
            <button className='btn btn-primary'>Donate $ {price}</button>
          </div>
        <div className='card-body mt-10 ml-6'>
          <h2 className='card-title'>{title}</h2>
          <p className="">{details}</p>

        </div>
      </div>
    </div>
  );
};

export default DonateCard;

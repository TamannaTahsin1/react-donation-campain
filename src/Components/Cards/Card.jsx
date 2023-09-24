/** @format */

const Card = ({card}) => {

    const {id, image, category, title} = card || {}

  return (
    <div>
      <button>
        <div className='card card-compact w-80 bg-base-100 shadow-xl'>
          <figure>
            <img
              src='/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
              alt='Shoes'
            />
          </figure>
          <div className='card-body'>
            <p className="text-sm  p-3 text-start">Health</p>
            <h2 className='card-title'>Shoes!</h2>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Card;

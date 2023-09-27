/* eslint-disable react/prop-types */
import swal from "sweetalert";
import PropTypes from 'prop-types';

const DonateCard = ({ card }) => {
  const { id, image, price, title, details, btn_color } = card || {};
  // for color
  const btnColor ={
    backgroundColor: btn_color
  }

  const handleAddToDonation = () =>{

    const addedDonationArray = [];
    // to save data local storage
    const donationItems = JSON.parse(localStorage.getItem('donation'))
    if(!donationItems){
        addedDonationArray.push(card)
        localStorage.setItem('donation', JSON.stringify(addedDonationArray))
        swal("Thank You!", "Thanks for your Contribution!", "success");

    }
    else{

        const isExists = donationItems.find(card => card.id === id)
        
        if(!isExists){
            
        addedDonationArray.push(...donationItems, card)
        localStorage.setItem('donation', JSON.stringify(addedDonationArray))
        swal("Thank You!", "Thanks for your Contribution!", "success");
        }
        else{
            swal("Oops!", "You already donate here!", "error");
        }
    }
  }

  return (
    <div className='container mx-auto flex justify-center items-center h-screen'>
      <div className='relative flex flex-col bg-clip-border text-gray-600 card card-compact w-2/4 bg-white shadow-md'>
        <div className="relative overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
          <img className="w-full"
            src={image}
            alt='Shoes'
          />  
          <div className='w-full absolute bottom-0 bg-gray-800 bg-opacity-60 p-4'>
            <button onClick={handleAddToDonation} className='btn btn-primary border-none text-white' style={btnColor}>Donate $ {price}</button>
          </div>   
        </div>

        <div className='card-body mt-10 ml-6'>
          <h2 className='card-title text-black font-bold text-2xl'>{title}</h2>
          <p className="">{details}</p>
        </div>
      </div>
    </div>
  );
};
DonateCard.prototype ={
  card: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
}

export default DonateCard;

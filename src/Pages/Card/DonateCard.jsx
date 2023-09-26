import swal from "sweetalert";


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
        swal("Good job!", "Thanks for your Donation!", "success");

    }
    else{

        const isExists = donationItems.find(card => card.id === id)
        
        if(!isExists){
            
        addedDonationArray.push(...donationItems, card)
        localStorage.setItem('donation', JSON.stringify(addedDonationArray))
        swal("Good job!", "Thanks for your Donation!", "success");
        }
        else{
            swal("Oops!", "You already donate here!", "error");
        }
    }
  }

  return (
    <div className='container mx-auto flex justify-around items-center mt-20'>
      <div className='card card-compact w-2/4 bg-base-100 shadow-xl'>
        <figure>
          <img className="w-4/5"
            src={image}
            alt='Shoes'
          />
        </figure>
        <div className='card-actions justify-start ml-24 lg:-mt-20'>
            <button onClick={handleAddToDonation} className='btn btn-primary border-none text-white' style={btnColor}>Donate $ {price}</button>
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

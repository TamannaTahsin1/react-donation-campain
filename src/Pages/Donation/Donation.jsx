import { useEffect, useState } from "react";
import DonateCard from "../Card/DonateCard";

const Donation = () => {
  const [donation, setDonation] = useState([]);

  const [notFound, setNotFound] = useState(false);

  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    const donationItems = JSON.parse(localStorage.getItem("donation"));
    if (donationItems) {
      setDonation(donationItems);
    } else {
      setNotFound("No Data Found");
    }
  }, []);
  console.log(donation);
  return (
    <div>
      {notFound ? (
        <p className='flex justify-center items-center h-[80vh]'>{notFound}</p>
      ) : (
        <div>
            
          <div className='grid grid-cols-1 md:grid-cols-2 '>
        {
            isShow? donation.map((card) => (
                <DonateCard key={card.id} card={card}></DonateCard>
              ))
            : donation.slice(0,4).map((card) => (
                <DonateCard key={card.id} card={card}></DonateCard>
              )) 
        }
          </div>
        {donation.length > 4 && 
                  <button onClick={()=> setIsShow(!isShow)} className="btn btn-primary block mx-auto">
                  {isShow? 'See Less' : 'See All'}
                </button>

        }
        </div>
      )}
    </div>
  );
};

export default Donation;

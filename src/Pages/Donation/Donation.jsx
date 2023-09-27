import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

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
                <DonationCard key={card.id} card={card}></DonationCard>
              ))
            : donation.slice(0,4).map((card) => (
                <DonationCard key={card.id} card={card}></DonationCard>
              )) 
        }
          </div>
        {donation.length > 4 && 
                  <button onClick={()=> setIsShow(!isShow)} className="btn bg-green-700 border-none block mx-auto text-white mt-5">
                  {isShow? 'See Less' : 'See All'}
                </button>

        }
        </div>
      )}
    </div>
  );
};

export default Donation;

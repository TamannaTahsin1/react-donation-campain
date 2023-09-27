import { useEffect, useState } from "react";


const SearchBar = ({card}) => {

  const [searchTerm, setSearchTerm] = useState('')
  useEffect(() => {
    fetch('data.json')
    .then((res) => res.json())
    .then(data => console.log(data))
  })
  return (
    <div>
      <div className='container mx-auto'>
        <input
          type='text'
          placeholder='Search here....'
          onChange={(e)=>setSearchTerm(e.target.value)}
          className='input input-bordered w-full max-w-xs rounded-r-none text-black'
        />
        <button
          id='btn-apply'
          className='btn rounded-l-none bg-[#FF444A] border-transparent text-white font-bold normal-case mb-5'>
          Search
        </button>
      </div>
      <div>
        {
          card.filter((val) => {
            if(searchTerm === ''){
              return val
            }
            else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
              return val;
            }
          })
        }
      </div>
    </div>
  );
};

export default SearchBar;

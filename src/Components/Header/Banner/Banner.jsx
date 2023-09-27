import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Banner = ({setResults}) => {
const [input, setInput] = useState('')
const fetchData = (value) =>{
  fetch('./data.json')
  .then(res => res.json())
  .then(data => {
    const results = data.filter((card) =>{
      return card && card.category && card.category.toLowerCase().includes(value)
    });
    setResults(results);
  })
};
const handleSearch= (value) =>{
  setInput(value)
  fetchData(value)
};

    return (
        <div className="h-[70vh] ">
            <div className="hero h-[70vh] " style={{backgroundImage: 'url(./banner.jpg)'}}>
  <div className="hero-overlay bg-white bg-opacity-90"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl z-10 font-bold w-full text-black">
        I Grow By Helping People In Need</h1>
        {/* for search bar */}
        <div className='container mx-auto'>
        <input
        value={input}
          type='text'
          placeholder='Search here....'
          onChange={(e)=>handleSearch(e.target.value)}
          className='input input-bordered w-full max-w-xs rounded-r-none text-black'
        />
        <button
          id='btn-apply'
          className='btn rounded-l-none bg-[#FF444A] border-transparent text-white font-bold mb-5'>
          Search
        </button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;
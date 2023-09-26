
const Banner = () => {
    return (
        <div className="h-[70vh] bg-green-200">
            <div className="hero h-[70vh] bg-white bg-opacity-90" style={{backgroundImage: 'url(./banner.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-3xl font-bold w-full text-black">I Grow By Helping People In Need</h1>
      <input type="file" className="file-input file-input-bordered w-full max-w-xs " />
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;
/* eslint-disable react/prop-types */


const SearchResult = ({search}) => {
    const { image, category, title,div_color, text_color } = search || {}
    // for colors
    const divColor ={
      backgroundColor: div_color,
    };
    const textColor ={
      color: text_color,
    };

    return (
        <div>
             <div className='card card-compact w-80 h-80 bg-base-100 shadow-xl '>
          <figure>
            <img className='w-80 h-64'
              src={image}
              alt='images'
            />
          </figure>
          <div className='card-body' style={divColor}>
            <p className="text-sm  p-3 text-start" style={textColor}>{category}</p>
            <h2 className='card-title' style={textColor}>{title}</h2>
          </div>
        </div>
        </div>
    );
};

export default SearchResult;
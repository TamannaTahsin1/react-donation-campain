import { useLoaderData } from "react-router-dom";
import Cards from "../../Components/Cards/Cards";
import Banner from "../../Components/Header/Banner/Banner";
import { useState } from "react";
// import SearchBar from "../../Components/SearchBar/SearchBar";


const Home = () => {
    const cards = useLoaderData()
    const [results, setResults] =useState(cards)
    
    
    return (
        <div>
            <Banner setResults={setResults}></Banner>
            {/* <SearchBar search={cards}></SearchBar> */}
            <Cards cards={cards} results={results}></Cards>
            
        </div>
    );
};

export default Home;
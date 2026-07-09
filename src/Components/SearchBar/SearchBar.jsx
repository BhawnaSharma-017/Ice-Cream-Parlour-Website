import React, { useState } from 'react'
import './SearchBar.css'
import { Search, Star} from 'lucide-react';
import { flavours } from '../../assets/flavours';

const SearchBar = () => {

    const [query,setQuery] = useState("");
    const filterFlavours = flavours.filter(f =>
        f.name.toLowerCase().includes(query.toLowerCase())
    );

  return (
    <div className='search-bar'>
      <div className="search-bar-content">
      <h3><Search />  Got Your Taste Here</h3>
      <input type="text" placeholder='Search flavours...' value={query} 
      onChange={(e)=>setQuery(e.target.value)}/>
      </div>
     <div className="filter-card-main">
        {filterFlavours.map(flavour=>(   
        <div key={flavour.id} className='filter-cards'>
            <h2> {flavour.name}</h2>
            <img src={flavour.image} alt="" />
            <p>{flavour.category}</p>
            <div className="price-rating">
                <p>Rs. {flavour.price}</p>
                <p>{flavour.rating} <Star/> </p>
            </div>
        </div>
        
      ))}
     
     </div>
    </div>
  )
}

export default SearchBar

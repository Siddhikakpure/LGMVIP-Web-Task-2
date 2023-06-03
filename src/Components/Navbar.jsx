import React, { useState } from 'react';

const Navbar = ({ handleSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchClick = () => {
    handleSearch(query);
  };

  return (
    <nav style={{
      display:'flex',
      justifyContent:'space-between',
      flexWrap:'wrap',
    }}>
      <div className="brand">Lets Grow More</div>
      <div>
        <input
          type="text"
          placeholder="Search users..."
          value={query}
          onChange={handleInputChange}
          style={{
            textAlign:'center',
            fontSize:'15px',
            padding:'8px',
            marginRight:'15px',
            borderRadius:'7px',
          }}
        />
        <button className="get-users-btn" onClick={handleSearchClick} style={{
          fontSize:'15px',
          backgroundColor:'cyan',
          padding:'8px',
          marginRight:'15px',
          borderRadius:'7px',

        }}>
          Search
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

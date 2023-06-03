import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Navbar from './Components/Navbar';
import UserCard from './Components/UserCard';

const App= () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://reqres.in/api/users?page=1');
      const data = await response.json();
      setUsers(data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Filter users based on search query
  const filteredUsers = users.filter((user) =>
    user.first_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Navbar handleSearch={handleSearch} />
      <div className="user-card-grid">
        {loading ? (
          <div className="loader">Loading...</div>
        ) : filteredUsers.length > 0 ? (
          filteredUsers.map((user) => <UserCard key={user.id} user={user} />)
        ) : (
          <div className="no-results">No results found.</div>
        )}
      </div>
    </div>
  );
};

export default App;

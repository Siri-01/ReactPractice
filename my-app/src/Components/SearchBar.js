import React, { useState, useEffect } from 'react';

const SearchHistory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    // Load search history from local storage on initial render
    const storedHistory = localStorage.getItem('searchHistory');
    if (storedHistory) {
      setSearchHistory(JSON.parse(storedHistory));
    }
  }, []);

  useEffect(() => {
    // Save search history to local storage whenever it changes
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  }, [searchHistory]);

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      setSearchHistory([...searchHistory, searchTerm]);
      setSearchTerm('');
    }
  };
  // const handleSearch = (e) => {
  //   // Check if the pressed key is the backspace key
  //   if (e.key === 'Backspace') {
  //     // Remove the last character from the last search term
  //     setSearchHistory(prevSearchHistory => {
  //       if (prevSearchHistory.length === 0) {
  //         return prevSearchHistory;
  //       }
  //       const lastTerm = prevSearchHistory[prevSearchHistory.length - 1];
  //       const truncatedTerm = lastTerm.slice(0, -1);
  //       return [...prevSearchHistory.slice(0, -1), truncatedTerm];
  //     });
  //     return;
  //   }
  
    // If it's not the backspace key, add the current search term
  //   if (searchTerm.trim() !== '') {
  //     setSearchHistory([...searchHistory, searchTerm]);
  //     setSearchTerm('');
  //   }
  // };
  
  

  const handleSortByName = () => {
    const sortedHistory = [...searchHistory].sort();
    setSearchHistory(sortedHistory);
  };

  return (
    <div>
      <h1>Search History</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleSortByName}>Sort by Name</button>
      <ul>
        {searchHistory.map((term, index) => (
          <li key={index}>{term}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHistory;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchHistory, setSearchHistory] = useState([]);

//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/users')
//       .then(response => {
//         setUsers(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching user data:', error);
//       });
//   }, []);

//   useEffect(() => {
//     const storedHistory = localStorage.getItem('searchHistory');
//     if (storedHistory) {
//       setSearchHistory(JSON.parse(storedHistory));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
//   }, [searchHistory]);

//   const handleSearch = (e) => {
//     const searchTerm = e.target.value;
//     setSearchTerm(searchTerm);
//     setSearchHistory(prevSearchHistory => [...prevSearchHistory, searchTerm]);
//   };

//   const handleSortByName = () => {
//     const sortedUsers = [...users].sort((a, b) => {
//       return a.name.localeCompare(b.name);
//     });
//     setUsers(sortedUsers);
//   };

//   const filteredUsers = users.filter(user =>
//     user.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="container">
//       <h1 className='userlist'>User List</h1>
    
//         <div style={{
//           width: '300px',
//           padding: '10px'}}>
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={handleSearch}
//           placeholder="Search by name"
//         />
//         </div>
      
//       <div className='u' >
//         <h3>Past Search Terms</h3>
//         <ul>
//           {searchHistory.map((term, index) => (
//             <li key={index}>{term}</li>
//           ))}
//         </ul>
//       </div>
//       <div className="u" >
//         <button onClick={handleSortByName}>Sort by Name</button>
//       </div>
//       <div>
//   <ul className='userlist'>
//     {filteredUsers.map(user => (
//       <li key={user.id}>
//         <strong>{user.name}</strong><br />
//         <strong>Email:</strong> {user.email}<br />
//         <strong>Phone:</strong> {user.phone}<br />
//         <strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
//       </li>
//     ))}
//   </ul>
// </div>
//     </div>
//   );
// };

// export default UserList;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  useEffect(() => {
    const storedHistory = localStorage.getItem('searchHistory');
    if (storedHistory) {
      setSearchHistory(JSON.parse(storedHistory));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  }, [searchHistory]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    // if (e.key === 'Backspace') {
    //   // Do not add the backspace key to the search history
    //   return;
    // }
    setSearchTerm(searchTerm);
    setSearchHistory(prevSearchHistory => [...prevSearchHistory, searchTerm]);
  };
 
  
   
    
    

    
    

  const handleSortByName = () => {
    const sortedUsers = [...users].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setUsers(sortedUsers);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className='userlist'>User List</h1>

      <div style={{ width: '300px', padding: '10px', margin: '0 auto', top:'67px' }}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by name"
        />
      </div>

      <div className='u'>
        <h3>Past Search Terms</h3>
        <ul>
          {searchHistory.map((term, index) => (
            <li key={index}>{term}</li>
          ))}
        </ul>
      </div>

      
        <div style={{
          position:'absolute',
           top:'67px',
           left:'820px',
    color:'white',
    fontSize:'20px',
    alignItems:'center',
    fontStyle:'normal',
    color:'white'
        }}>
        <button onClick={handleSortByName}>Sort by Name</button></div>
    

      <div>
        <ul className='userlist'>
          {filteredUsers.map(user => (
            <li key={user.id}>
              <strong>{user.name}</strong><br />
              <strong>Email:</strong> {user.email}<br />
              <strong>Phone:</strong> {user.phone}<br />
              <strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserList;


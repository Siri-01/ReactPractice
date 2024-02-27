import React from "react";
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const homeStyle = {
    fontsize:'50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', /* 100% of the viewport height */
    // backgroundColor: '#f0f0f0', /* Set your preferred background color */
    backgroundImage: `url('https://images.freecreatives.com/wp-content/uploads/2016/04/Solid-Black-Website-Background.jpg')`,
    backgroundSize: 'cover', /* Cover the entire container */
    backgroundPosition: 'center', /* Center the image within the container */
    backgroundRepeat: 'no-repeat', /* Do not repeat the image */
    color:'white',
    padding: '20px',
  };
  
  const buttonStyle = {
    marginTop: '20px',
    innerWidth:'10px'
  };
  
const Home=()=>{
    const navigate=useNavigate();
    const handleViewButton=()=>{
        navigate('/view');
    }
    const handleSearchButton=()=>{
        navigate('/search');
    }
    return(
        
            <div className="home" style={homeStyle}>
                
                <h1>Welcome to User Info!</h1>
                <p>Discover and explore user details with ease</p>
                <br/>
                <button type="button" class='btn btn-primary' style={buttonStyle} onClick={handleViewButton}> Get Started </button>               
            </div>
        
    );
}
export default Home;
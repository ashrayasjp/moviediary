import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>Letterboxd</h1>
      <nav>
        <ul style={styles.navList}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
          <li><Link to="/diary" style={styles.link}>Diary</Link></li>
          <li><Link to="/watchlist" style={styles.link}>Watchlist</Link></li>

          <li style = {{marginLeft: 564}}><Link to="/signup" style={styles.link}>Signup</Link></li>
        </ul>
        
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
textColor: 'blue',
  
    padding: '10px 20px',
    width: '100%',
    
  },
  logo: {
    fontFamily: 'Chiller', 
    fontSize: '43px',
    textShadow: '0 0 6px pink',

color:'black',
 
    marginTop: 30,
    marginBottom:0,
    padding: 0,
  },
  navList: {
    fontFamily: 'Lora',
    display: 'flex',
    listStyle: 'none',
    gap: '100px',
    marginLeft: 469,
    marginTop:30,
    marginBottom:0,
    padding: 0,
    
  },
  link: {
    color: 'grey',
    textDecoration: 'none',
    fontSize: '25px',
    
  },
};

export default Header;

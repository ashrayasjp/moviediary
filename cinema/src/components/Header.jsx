import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>Cinema Zone</h1>
      <nav>
        <ul style={styles.navList}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
          <li><Link to="/diary" style={styles.link}>Diary</Link></li>
          <li><Link to="/watchlist" style={styles.link}>Watchlist</Link></li>

          <li style = {{marginLeft: 500}}><Link to="/signup" style={styles.link}>Signup</Link></li>
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

    
    color: 'white',
    padding: '10px 20px',
    width: '100%',
    
  },
  logo: {
    fontFamily: 'Lora',
    fontSize: '30px',
    margin: 0,
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    gap: '100px',
    marginLeft: 469,
    padding: 0,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '25px',
  },
};

export default Header;

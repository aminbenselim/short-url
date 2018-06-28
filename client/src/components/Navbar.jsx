import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navbar.scss';

const Navbar = () => (
  <nav className={styles.navbar}>
    <span className={styles.logo}>
      <Link to={'/'}>
        <h1>URL shortener</h1>
      </Link>
    </span>
    <span className={styles.navigation}>
      <Link className={styles.link} to="/create">
        create link
      </Link>
      <Link className={styles.link} to="/list">
        links available
      </Link>
    </span>
  </nav>
);

export default Navbar;

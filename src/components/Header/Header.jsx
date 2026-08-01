import classes from './Header.module.css';
import { Navigation } from '../Navigation/Navigation';
import { useState, useEffect } from 'react';
import axios from 'axios';

export function Header() {
  const [navigationItems, setNavigationItems] = useState([]);

  useEffect(() => {
    axios.get('/api/menu.json')
      .then(response => {
        setNavigationItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching navigation items:', error);
      });
  }, []);

  return (
    <header className={classes.headerWrapper}>
      <div className="container">
        <div className={classes.header}>
          <div className={classes.logo}>
            Minimalist Blog
          </div>
          <Navigation navigationItems={navigationItems} />
        </div>
      </div>
    </header>
  );
}
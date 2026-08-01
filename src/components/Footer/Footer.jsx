import { Navigation } from '../Navigation/Navigation';
import classes from './Footer.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Subscribe } from '../Subscribe/Subscribe';

export function Footer() {
   const [navigationItems, setNavigationItems] = useState([]);

  useEffect(() => {
    axios.get('/api/footer-menu.json')
      .then(response => {
        setNavigationItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching navigation items:', error);
      });
  }, []);

  return (
    <>
     <Subscribe />
    <footer className={classes.footerWrapper}>
      <div className="container">
        <div className={classes.footerContent}>
          <div className={classes.footerInfo}>
            <div className={classes.footerTitle}>Modern Düşünceler</div>
            <div className={classes.footerDescription}>&copy; 2026 My React App. All rights reserved.</div>
          </div>
          <Navigation navigationItems={navigationItems} variant="footer" />
        </div>
      </div>
    </footer>
    </>
  );
}
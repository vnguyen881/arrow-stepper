import React from 'react';
import styles from './NavTab.module.css';

// React component
const NavTab = () => {
  return (
    <div>
      <div id="stepperStatus">
        <ul className={styles.stepperStatus}>
          <li className={styles.stepperStatus}>Log Inventory</li>
        </ul>
      </div>
    </div>
  );
};

export default NavTab;

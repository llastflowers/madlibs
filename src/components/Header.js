import React, { Component } from 'react';
import styles from './App.css';

class Header extends Component {
  render() {
    return (
      <header className={styles.Header}>
        <section>
          <h1 >Mad Libs</h1>
          <h2>idk, a subheader i guess</h2>
        </section>
      </header>
    );
  }
}

export default Header;

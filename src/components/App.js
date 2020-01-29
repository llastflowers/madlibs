import React, { Component } from 'react';
// import styles from '.App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Madlib from '../containers/Madlib';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Madlib />
        <Footer />
      </React.Fragment>
    );
  }
}

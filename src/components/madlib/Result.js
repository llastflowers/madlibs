import React from 'react';
import PropTypes from 'prop-types';
import { powerpuff } from '../../services/madlib';
import styles from '../App.css';

const Result = ({ words, closeResult }) => (
  <>
    <section className={styles.resultContainer}>
      <p className={styles.Result}>{powerpuff(...words)}</p>
    </section>
    <section className={styles.backButtonContainer}>
      <button className={styles.backButton} onClick={closeResult}>Back</button>
    </section>
  </>
);

Result.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
  closeResult: PropTypes.func.isRequired
};

export default Result;

import React from 'react';
import PropTypes from 'prop-types';
import { zoo } from '../../services/madlib';

const Result = ({ words, closeResult }) => (
  <>
    <p>{zoo(...words)}</p>
    <button onClick={closeResult}>Clear</button>
  </>
);

Result.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
  closeResult: PropTypes.func.isRequired
};

export default Result;

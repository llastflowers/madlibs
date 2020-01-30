import React from 'react';
import PropTypes from 'prop-types';
import { powerpuff } from '../../services/madlib';

const Result = ({ words, closeResult }) => (
  <>
    <p>{powerpuff(...words)}</p>
    <button onClick={closeResult}>X</button>
  </>
);

Result.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
  closeResult: PropTypes.func.isRequired
};

export default Result;

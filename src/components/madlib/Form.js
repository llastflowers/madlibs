import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input type="text" onChange={onChange} placeholder="adjective" />
    <input type="text" placeholder="noun" />
    <input type="text" placeholder="verb, past tense" />
    <input type="text" placeholder="adverb" />
    <input type="text" placeholder="adjective" />
    <input type="text" placeholder="noun" />
    <input type="text" placeholder="noun" />
    <input type="text" placeholder="adjective" />
    <input type="text" placeholder="verb" />
    <input type="text" placeholder="adverb" />
    <input type="text" placeholder="verb, past tense" />
    <input type="text" placeholder="adjective" />
    <button>Create Mad Lib</button>
  </form>
);

Form.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Form;

import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onChange0, onChange1, onChange2, onChange3, onChange4, onChange5, onChange6, onChange7, onChange8, onChange9, onChange10, onChange11, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input type="text" onChange={onChange0} placeholder="noun" />
    <input type="text" onChange={onChange1} placeholder="noun" />
    <input type="text" onChange={onChange2} placeholder="adjective (rhyme w/ prev.)" />
    <input type="text" onChange={onChange3} placeholder="adjective" />
    <input type="text" onChange={onChange4} placeholder="noun" />
    <input type="text" onChange={onChange5} placeholder="food" />
    <input type="text" onChange={onChange6} placeholder="noun" />
    <input type="text" onChange={onChange7} placeholder="noun" />
    <input type="text" onChange={onChange8} placeholder="noun" />
    <input type="text" onChange={onChange9} placeholder="plural noun" />
    <input type="text" onChange={onChange10} placeholder="activity" />
    <input type="text" onChange={onChange11} placeholder="plural noun" />
    <button>Blast Off!</button>
    <button type="reset">Clear</button>
  </form>
);

Form.propTypes = {
  onChange0: PropTypes.func.isRequired,
  onChange1: PropTypes.func.isRequired,
  onChange2: PropTypes.func.isRequired,
  onChange3: PropTypes.func.isRequired,
  onChange4: PropTypes.func.isRequired,
  onChange5: PropTypes.func.isRequired,
  onChange6: PropTypes.func.isRequired,
  onChange7: PropTypes.func.isRequired,
  onChange8: PropTypes.func.isRequired,
  onChange9: PropTypes.func.isRequired,
  onChange10: PropTypes.func.isRequired,
  onChange11: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Form;

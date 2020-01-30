import React, { Component } from 'react';
import Form from '../components/madlib/Form';
import Result from '../components/madlib/Result';

export default class Madlib extends Component{
  state = {
    showResult: false,
    word0: '',
    word1: '',
    word2: '',
    word3: '',
    word4: '',
    word5: '',
    word6: '',
    word7: '',
    word8: '',
    word9: '',
    word10: '',
    word11: '',
    wordArray: []
  }

  handleChange0 = ({ target }) => {
    this.setState({ word0: target.value });
  }
  handleChange1 = ({ target }) => {
    this.setState({ word1: target.value });
  }
  handleChange2 = ({ target }) => {
    this.setState({ word2: target.value });
  }
  handleChange3 = ({ target }) => {
    this.setState({ word3: target.value });
  }
  handleChange4 = ({ target }) => {
    this.setState({ word4: target.value });
  }
  handleChange5 = ({ target }) => {
    this.setState({ word5: target.value });
  }
  handleChange6 = ({ target }) => {
    this.setState({ word6: target.value });
  }
  handleChange7 = ({ target }) => {
    this.setState({ word7: target.value });
  }
  handleChange8 = ({ target }) => {
    this.setState({ word8: target.value });
  }
  handleChange9 = ({ target }) => {
    this.setState({ word9: target.value });
  }
  handleChange10 = ({ target }) => {
    this.setState({ word10: target.value });
  }
  handleChange11 = ({ target }) => {
    this.setState({ word11: target.value });
  }
  
  toggleResult = () =>
    this.setState(state => ({ ...state, showResult: !state.showResult }));
  
  handleSubmit = event => {
    event.preventDefault();
    this.toggleResult();
    this.setState(state => ({
      wordArray: [state.word0, state.word1, state.word2, state.word3, state.word4, state.word5, state.word6, state.word7, state.word8, state.word9, state.word10, state.word11]
    }));
  }

  render() {
    const { showResult } = this.state;
    return (
      <>
        {!showResult && <Form
          onChange0={this.handleChange0}
          onChange1={this.handleChange1}
          onChange2={this.handleChange2}
          onChange3={this.handleChange3}
          onChange4={this.handleChange4}
          onChange5={this.handleChange5}
          onChange6={this.handleChange6}
          onChange7={this.handleChange7}
          onChange8={this.handleChange8}
          onChange9={this.handleChange9}
          onChange10={this.handleChange10}
          onChange11={this.handleChange11}
          onSubmit={this.handleSubmit} />}
        {showResult && <Result words={this.state.wordArray} closeResult={this.toggleResult} />}
      </>
    );
  }
}

/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
// import styles from './App.scss';
import '../../../config/styles/global-styles';

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
        {this.props.children}
        <div>Nadia Trigo</div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired
};

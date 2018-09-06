import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../../../config/styles/global-styles';
import * as Title from  './../../atoms/title';
import Description from  './../../atoms/description';
// import styles from './Home.scss';

export default class Home extends Component {
  componentDidMount() {
    // only fetch data if it does not already exist
    if (!this.props.data) this.props.getData();
  }

  render() {
    const { data } = this.props;
    if (!data) return 'Loading async data...';

    return (
      <div>
        <Title.H1>Home page</Title.H1>
        <Description>Async Text: {data.text}</Description>
      </div>
    );
  }
}

Home.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string
  }),
  getData: PropTypes.func.isRequired
};

Home.defaultProps = {
  data: null
};

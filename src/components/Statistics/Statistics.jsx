import React, { Component } from 'react';
import { List } from './Statistics.styled';
import PropTypes from 'prop-types';

class Statistics extends Component {
  render() {
    const { bad, good, neutral, total, positivePercentage } = this.props;
    return (
      <>
        <List>
          <li>
            Good: <span>{good}</span>
          </li>
          <li>
            Neutral: <span>{neutral}</span>
          </li>
          <li>
            Bad: <span>{bad}</span>
          </li>
          <li>
            Total: <span>{total}</span>
          </li>
          <li>
            Positive feedback: <span>{positivePercentage + '%'}</span>
          </li>
        </List>
      </>
    );
  }
}

Statistics.propTypes = {
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;

import PropTypes from 'prop-types';
import { List, Item, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <List>
        {options.map(option => {
          return (
            <Item key={option}>
              <Button onClick={onLeaveFeedback} option={option}>
                {option}
              </Button>
            </Item>
          );
        })}
      </List>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
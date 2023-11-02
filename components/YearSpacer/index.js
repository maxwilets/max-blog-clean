import PropTypes from 'prop-types';
import YearSpacerStyles from './styles';

export default function YearSpacer({ years }) {
  return (
    <YearSpacerStyles>
      <p>{years}</p>
    </YearSpacerStyles>
  );
}

YearSpacer.propTypes = {
  years: PropTypes.string,
};

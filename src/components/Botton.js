// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function Botton({ item, id = 25 }) {
  return (
    <button className={id % 4 === 0 ? 'btn btn-orange ' : 'btn'} type="button">
      {item}
    </button>
  );
}
Botton.propTypes = {
  item: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
export default Botton;

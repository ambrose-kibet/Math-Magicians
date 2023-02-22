import PropTypes from 'prop-types';

function Botton({ item, id = 25, handleClick }) {
  return (
    <button
      className={id % 4 === 0 ? 'btn btn-orange ' : 'btn'}
      type="button"
      data-name={item}
      onClick={(e) => handleClick(e)}
    >
      {item}
    </button>
  );
}
Botton.propTypes = {
  item: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};
export default Botton;

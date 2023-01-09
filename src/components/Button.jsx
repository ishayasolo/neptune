import PropTypes from "prop-types"
const Button = ({ value }) => (
  <button className="font-bold text-white px-5 py-3 rounded-lg border border-neptune-secondary-blue bg-neptune-secondary-blue transition hover:bg-transparent hover:text-neptune-secondary-blue">
    {value}
  </button>
)

Button.propTypes = {
  value: PropTypes.string,
}

export default Button

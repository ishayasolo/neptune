import PropTypes from "prop-types"

const Header = ({ firstPart, secondPart }) => (
  <h2 className="text-2xl mb-2">
    {firstPart} <span className="font-bold">{secondPart}</span>
  </h2>
)

Header.propTypes = {
	firstPart: PropTypes.string,
	secondPart: PropTypes.string
}

export default Header

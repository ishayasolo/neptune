import PropTypes from "prop-types"

const Step = ({ count, label, description }) => (
  <div className="flex gap-4 items-center max-w-[410px] px-6 py-5 bg-white rounded-lg shadow-lg">
    <div className="flex items-center justify-center bg-neptune-tertiary-blue rounded-md text-neptune-secondary-blue w-14 h-14 text-[32px] font-bold">
      {`0${count}`}
    </div>
    <div className="flex flex-col gap-1">
      <p className="text-neptune-primary-blue font-bold">{label}</p>
      <p className="text-xs text-neptune-primary-gray">{description}</p>
    </div>
  </div>
)

Step.propTypes = {
  count: PropTypes.number,
  label: PropTypes.string,
  description: PropTypes.string,
}

export default Step

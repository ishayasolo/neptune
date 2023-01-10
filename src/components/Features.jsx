import { FEATURES } from "utils/constants"
import Header from "./Header"

const Features = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 py-20" id="how-it-works">
      <Header firstPart="Our" secondPart="Features" />
      <div className="flex gap-4 flex-wrap items-center justify-center">
        {FEATURES.map(({ image, content }) => (
          <div
            key={image}
            className="flex flex-col justify-center gap-6 items-center py-8 px-6 bg-white rounded-md shadow-xl w-48 border border-neutral-100"
          >
            <div className="flex justify-center items-center w-14">
              <img src={require(`../assets/images/${image}.png`)} alt="" />
            </div>
            <p className="text-xs text-neptune-primary-blue text-center leading-6">
              {content}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Features

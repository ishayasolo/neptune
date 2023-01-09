import { HOW_TO_START } from "utils/constants"
import Button from "./Button"
import Header from "./Header"
import Step from "./Step"

const HowToStart = () => {
  return (
    <div className="py-24 px-4 flex flex-col gap-8 justify-center items-center bg-neptune-secondary-gray bg-center bg-no-repeat bg-steps-bg">
      <Header firstPart="How to" secondPart="start" />
      <div className="flex flex-col gap-10 max-w-[410px]">
        <div className="flex flex-col gap-4">
          {HOW_TO_START.map((step, index) => (
            <Step key={index} count={index + 1} {...step} />
          ))}
        </div>
        <Button value="Get started" />
      </div>
    </div>
  )
}

export default HowToStart

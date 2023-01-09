import heroImage from "assets/svg/hero-photo.svg"
import Button from "./Button"

const Hero = () => {
  return (
    <div
      className="flex items-center justify-between gap-28 max-w-7xl self-center"
      style={{ height: "calc(100vh - 114px)" }}
    >
      <div className="flex flex-col gap-8">
        <h1 className="text-4xl max-w-[315.5px] flex flex-col gap-4">
          <span className="font-bold">Neptune</span>
          <span className="font-bold">maritime industry</span>
          <span>at your fingertips</span>
        </h1>
        <p className="leading-8 text-neptune-primary-gray">
          Neptune allow users to access a database of marine vehicles available
          for rental
        </p>
        <div className="pt-8 flex gap-4">
          {[
            "Get started",
            // "See our plans"
          ].map(cta => (
            <Button key={cta} value={cta} />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center -mr-5">
        <img src={heroImage} alt="" className="w-full" />
      </div>
    </div>
  )
}

export default Hero

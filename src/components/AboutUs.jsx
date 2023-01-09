import aboutPhoto from "assets/svg/about-photo.svg"
import Header from "./Header"
const AboutUs = () => {
  return (
    <div className="bg-neptune-secondary-gray flex justify-center items-center py-24">
      <div className="flex items-center gap-20 max-w-7xl self-center w-full">
        <div className="flex -ml-6">
          <img src={aboutPhoto} className="w-full" alt="" />
        </div>
        <div className="flex flex-col gap-6 max-w-[606px]">
          <Header firstPart="About" secondPart="Neptune" />
          <p className="text-neptune-primary-gray leading-8">
            Neptune is an integrated maritime system, which consists of a
            tracking and surveillance system where vessels owner and fleet
            managers can locate and track their vessels in real-time
          </p>
          <p className="text-neptune-primary-gray leading-8">
            Fleet management system where fleet managers can easily track and
            maintain vessels with reports and compliance checks to ensure their
            vessels are ready for operations in the Nigerian maritime domain and
            a weather forecast solution for marine operators
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs

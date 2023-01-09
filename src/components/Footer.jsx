import { FOOTER_LINKS } from "utils/constants"

const Footer = () => {
  const date = new Date()

  return (
    <div className="flex justify-between items-center py-14 w-full max-w-7xl self-center">
      <p className="text-neptune-secondary-blue font-bold">{`${date.getFullYear()}. Neptune`}</p>
      <div className="flex gap-12">
        {FOOTER_LINKS.map(({ label, path }) => (
          <a href={path} key={label} className="p-2 text-neptune-primary-blue">
            {label}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Footer

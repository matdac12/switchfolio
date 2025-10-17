"use client"
import { gruzContact, gruzContactLink } from "@/data/GruzData/data"
import SectionTitle from "../SectionTitle"
import { useSwitch } from "../Context/SwitchContext"
import { rinkitContact, rinkitContactLink } from "@/data/RinkitData/data"

const ReachOut = () => {
  const { isSwitchOn } = useSwitch()
  const contactLink = isSwitchOn ? gruzContactLink : rinkitContactLink

  return (
    <section className="flex flex-col gap-0.5">
      <SectionTitle title={isSwitchOn ? "Reach out to me" : "Contattami"} />
      <div className=" flex flex-col gap-2.5">
        <p>{isSwitchOn ? gruzContact : rinkitContact}</p>
        <div>
          <div className=" flex flex-wrap items-center gap-2">
            {contactLink.map((link) => (
              <a className="btn" key={link.id} target="_blank" href={link.link}>
                <link.icon />
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReachOut

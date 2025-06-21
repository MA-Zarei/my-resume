import { motion } from "framer-motion"
import "./About.css"
import { texts } from "../../Constants/texts"

const About = () => {
  return (
    <motion.div className="about" initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
      exit={{ opacity: 0, y: -20, transition: { duration: 1 } }}>
      <div className="section-one">
        <div className="first-left-col">
          <h1 className="title">about me</h1>
          <p className="about-me">
            {texts.about.description.split('\n').map((para, i) => (
              <p key={i} style={{ marginBottom: '8px' }}>{para}</p>
            ))}
          </p>
        </div>
        <div className="first-right-col">
          <h2 className="toolkits">my toolkits</h2>
          <div className="icons">
            {texts.about.toolkits.map((para, i) => (
              <div className="card" key={i}>
                <img className="icon" src={para[1]} />
                <p className="icon-name">{para[0]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="section-two">
        <div className="second-left-col">
          <h3 className="title">publications</h3>
          <p className="pub-description">
            {texts.about.publications.description}
          </p>
          <ul className="papers">
            {texts.about.publications.papers.map((para, i) => (
              <li key={i} style={{ marginBottom: '8px' }}>{para}</li>
            ))}
          </ul>
        </div>
        <div className="second-right-col">
          <h2 className="contact-title">contact</h2>
          <p className="contact-description">{texts.about.contact.description}</p>
          <a className="email" href={`mailto: ${texts.about.contact.email[1]}`}>
            {texts.about.contact.email[0]}
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default About
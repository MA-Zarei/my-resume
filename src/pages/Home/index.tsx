import { motion } from "framer-motion"
import "./Home.css"
import { texts } from "../../Constants/texts"
import type React from "react";

const Home: React.FC = () => {
  return (
    <motion.div className="home" initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
      exit={{ opacity: 0, y: -20, transition: { duration: 1 } }}>
      <div className="left-col">
        <p className="first-name">{texts.home.first_name}</p>
        <p className="description">{texts.home.description}</p>
        <p className="last-name">{texts.home.last_name}</p>
      </div>
      <div className="right-col">
        <p className="brief">
          {texts.home.brief}
        </p>
        <div className="freelance">
          <p className='first-line'>{texts.home.freelance_title}</p>
          <div className="notice">
            <div className="pulse-wrapper">
              <div className="pulse-ring delay-0" />
              <div className="pulse-ring delay-1" />
              <div className="pulse-core" />
              </div>
            <p>
              {texts.widgets.availability}
            </p></div>
        </div>
      </div>
    </motion.div>
  )
}

export default Home
import { motion } from "framer-motion"
import './Works.css'
import { texts } from "../../Constants/texts"
import OpenIcon from '../../assets/icons/open icon.svg'

const Works = () => {
  return (
    <motion.div className="works" initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
      exit={{ opacity: 0, y: -20, transition: { duration: 1 } }}
    >
      <h1 className="works-title">my works</h1>
      <p className="works-description">{texts.works.description}</p>
      <div className="work-cards">
        {texts.works.sites.map((para, i) => (
          <div className="card" key={i}>
            <img src={para[0]} className="site-logo" />
            <div className="work-content">
              <p className="heading">{para[1]}</p>
              {/* <p className="text">{para[1]}</p> */}
              <p className="heading">my role</p>
              <p className="text">{para[2]}</p>
              <p className="heading">Project Status</p>
              <p className="text">{para[3]}</p>
            </div>
            <div className="open-external">
              <a href={para[4]} target="_blank" rel="nofollow">
                <img src={OpenIcon} className="open-icon" />
              </a>
            </div>
          </div>
        ))}

      </div>

    </motion.div>
  )
}

export default Works
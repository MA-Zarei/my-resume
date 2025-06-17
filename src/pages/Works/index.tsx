import { AnimatePresence, motion } from "framer-motion"
import PageTransition from "../../layouts/StableOutlet"

const Works = () => {
  return (
      <motion.div className="home"  initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
        exit={{ opacity: 0, y: -20, transition: { duration: 1 } }}
      >
        <h1>Welcome to My Works</h1>
        <div className="content">
          <p>Hi, I'm [Your Name]</p>
          <p>A passionate web developer specializing in modern web technologies</p>
        </div>
      </motion.div>
  )
}

export default Works
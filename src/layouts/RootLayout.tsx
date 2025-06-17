import { useLocation } from "react-router-dom";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import Header from "../components/Header/Header";
import "./RootLayout.css";
import Background from "../components/Background/Background";
import StableOutlet from "./StableOutlet";

const RootLayout = () => {
  const location = useLocation();
  return (
    <motion.div
      className="root-layout"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1, ease: easeInOut } }}
    >
      <Header />
      <motion.div
        style={{ position: 'fixed', bottom: '0px', left: '0px', width: '100vw', height: '100vh', zIndex: '-99' }}
        initial={{ height: '0px' }}
        animate={{ height: '100vh', transition: { delay: 0.3, duration: 1, ease: easeInOut } }}
      >
        <Background />
      </motion.div>
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: easeInOut }}
        >
          <StableOutlet />
        </motion.main>
      </AnimatePresence>
    </motion.div >
  );
};

export default RootLayout;

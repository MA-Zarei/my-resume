import { motion } from "framer-motion"
import { createPortal } from "react-dom"
import isUnsupportedBrowser from "../../utils/isUnsupportedBrowser";
import './Overlay.css'

interface OverlayProps {
    onClick?: () => void;
}

function Overlay({ onClick }: OverlayProps) {
    return createPortal(
        <motion.div
            className={`overlayer ${isUnsupportedBrowser() ? 'overlayer-rgbaBG' : 'overlayer-glassBG'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            onClick={onClick}
        />,
        document.body
    )
}

export default Overlay
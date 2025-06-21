import { motion } from "framer-motion"
import { createPortal } from "react-dom"
import './Overlay.css'

interface OverlayProps {
    onClick?: () => void;
}

function Overlay({ onClick }: OverlayProps) {
    return createPortal(
        <motion.div
            className="overlayer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            onClick={onClick}
        />,
        document.body
    )
}

export default Overlay
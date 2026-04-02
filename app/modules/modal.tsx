'use client'

import { motion, AnimatePresence } from "framer-motion"

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Modal Box */}
            <motion.div
              className="bg-black/50 border border-white/80 p-6 rounded-2xl shadow-xl w-[90%] max-w-4xl"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 50 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()} // prevent close
            >
              {children}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
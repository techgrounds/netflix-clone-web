import React from 'react'

import './MiniModalFullScreen.scss'

import { motion, AnimatePresence } from 'framer-motion'

const MiniModalFullScreen = ({ isMiniModalVisible }) => {
  return (
    <AnimatePresence>
      {isMiniModalVisible && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.6,
            },
          }}
          exit={{
            opacity: 0,
            transition: {
              delay: 0.2,
            },
          }}
          className='mini-modal-background'>
          <motion.div
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
              transition: {
                duration: 0.6,
              },
            }}
            exit={{
              scale: 0,
              transition: {
                delay: 0.2,
              },
            }}
            className='mini-modal-container'>
            <div className='mini-modal-content'>
              <div className='mini-modal-header'>HELLO</div>
              <div className='mini-modal-description'>
                <div className='mini-modal-details'>HELLO</div>
                <div className='mini-modal-suggestions'>HELLO</div>
              </div>
              <div className='mini-modal-footer'>HELLO</div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MiniModalFullScreen

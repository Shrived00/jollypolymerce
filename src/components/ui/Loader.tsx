import React from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC = () => {
  return (
    
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-b"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 4 }}
    >
      <div className="flex flex-col justify-end items-end">
        <motion.img
          src="/logo-loader.png"
          alt="Logo"
          className="h-32 md:h-48 mx-auto mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="text-lg text-white mt-20 mx-10 text-center" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
         Mfg by: Rajhans Rigid PVC Pipes Industries
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Loader from './Loader';
 

interface PageWithLoaderProps {
  children: React.ReactNode;
}

const PageWithLoader: React.FC<PageWithLoaderProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen">
      {children}
      
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-50 bg-white"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Loader />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PageWithLoader;
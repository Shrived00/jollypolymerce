"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavBar from "@/components/NavBar";
import Hero from "@/components/layout/Hero";
import Info from "@/components/layout/Info";
import Aboutus from "@/components/layout/Aboutus";
import Products from "@/components/layout/Products";
import WhyUs from "@/components/layout/whyUs";
import FAQ from "@/components/layout/FAQ";
import Footer from "@/components/layout/Footer";
import Loader from "@/components/ui/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 z-50 bg-b"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Loader />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <NavBar />
            <Hero />
            <Info />
            <Aboutus />
            <Products />
            <WhyUs />
            <FAQ />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

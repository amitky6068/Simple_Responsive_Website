import { motion } from 'framer-motion';

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500 text-white">
      <motion.div 
        className="p-6 md:p-10 text-center bg-opacity-75 bg-black rounded-lg max-w-md w-full"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-6xl font-bold mb-4">About Us</h1>
        <p className="text-lg md:text-xl mb-4">Learn more about our mission and values.</p>
        <motion.button 
          className="px-6 md:px-8 py-2 md:py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition duration-300"
          whileHover={{ scale: 1.1 }}
        >
          Read More
        </motion.button>
      </motion.div>
    </div>
  );
}

export default About;

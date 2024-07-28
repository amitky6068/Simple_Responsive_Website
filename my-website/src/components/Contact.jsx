import { useState } from 'react';
import { motion } from 'framer-motion';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState('');
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await response.json();
      if (response.ok) {
        setSubmissionStatus('Form submitted successfully!');
        setSubmissionSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
      } else if (response.status === 400) {
        setSubmissionStatus(data.message); // Email already exists
        setSubmissionSuccess(false);
      } else {
        setSubmissionStatus('Form submission failed. Please try again.');
        setSubmissionSuccess(false);
      }
    } catch (error) {
      setSubmissionStatus('Form submission failed. Please try again.');
      setSubmissionSuccess(false);
    }

    setTimeout(() => {
      setSubmissionStatus('');
      setSubmissionSuccess(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500 text-white">
      <motion.div 
        className="p-6 md:p-10 text-center bg-opacity-75 bg-black rounded-lg max-w-md w-full"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-6">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-purple-300 text-black"
            required
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          />
          <motion.input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-pink-300 text-black"
            required
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          />
          <motion.textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-red-300 text-black"
            required
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          />
          <motion.button 
            type="submit" 
            className="w-full py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Submit
          </motion.button>
        </form>
        {submissionStatus && (
          <p className={`mt-6 text-center ${submissionSuccess ? 'text-green-500' : 'text-red-500'}`}>
            {submissionStatus}
          </p>
        )}
      </motion.div>
    </div>
  );
}

export default Contact;

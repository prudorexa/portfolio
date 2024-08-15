import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,  
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
      formData,
      import.meta.env.VITE_EMAILJS_USER_ID      
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((err) => {
      console.error('FAILED...', err);
      alert('Failed to send the message, please try again.');
    });
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen p-4 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-gray-300">
      <div className="lg:w-1/2 flex justify-center lg:justify-end mb-6 lg:mb-0">
        <img
          src="static/portfolio.jpg"
          alt="Prudence Mathu"
          className="rounded-full shadow-lg w-64 h-64 object-cover border-4 border-luminousGreen"
        />
      </div>
      
      <div className="lg:w-1/2 lg:pl-8">
        <h2 className="text-4xl font-bold mb-6 text-luminousGreen animate-pulse text-center lg:text-left">Contact Me</h2>
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-xl mb-2" htmlFor="name">Name</label>
            <input 
              className="w-full p-2 rounded-lg bg-black border-2 border-luminousGreen text-luminousGreen focus:outline-none"
              type="text" 
              name="name" 
              id="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-xl mb-2" htmlFor="email">Email</label>
            <input 
              className="w-full p-2 rounded-lg bg-black border-2 border-luminousGreen text-luminousGreen focus:outline-none"
              type="email" 
              name="email" 
              id="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-xl mb-2" htmlFor="message">Message</label>
            <textarea 
              className="w-full p-2 rounded-lg bg-black border-2 border-luminousGreen text-luminousGreen focus:outline-none"
              name="message" 
              id="message" 
              value={formData.message} 
              onChange={handleChange} 
              required 
            />
          </div>
          <button className="w-full p-2 rounded-lg bg-luminousGreen text-black font-bold hover:bg-green-600 transition-transform transform hover:scale-105 duration-300" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

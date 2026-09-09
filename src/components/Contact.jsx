import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(() => {
        setStatus('sent');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => setStatus('error'));
  };

  const inputClasses =
    'w-full p-3 rounded bg-panel border border-line text-paper placeholder:text-muted focus:outline-none focus:border-teal transition-colors duration-150';

  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-8 py-20">
      <p className="font-mono text-sm text-teal mb-3">// contact</p>
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/3">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-paper mb-4">
            Let's talk about a role, a project, or an idea.
          </h2>
          <p className="text-muted leading-relaxed">
            I usually reply within a day or two. If it's faster for you, reach me directly at{' '}
            <a href="mailto:mathuprudence24@gmail.com" className="text-teal hover:underline">
              mathuprudence24@gmail.com
            </a>.
          </p>
        </div>

        <form className="lg:w-2/3 space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm text-muted mb-2" htmlFor="name">Name</label>
            <input className={inputClasses} type="text" name="name" id="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <label className="block text-sm text-muted mb-2" htmlFor="email">Email</label>
            <input className={inputClasses} type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
            <label className="block text-sm text-muted mb-2" htmlFor="message">Message</label>
            <textarea className={`${inputClasses} min-h-32`} name="message" id="message" value={formData.message} onChange={handleChange} required />
          </div>
          <button
            className="font-mono text-sm bg-amber text-ink font-medium py-3 px-6 rounded hover:bg-paper transition-colors duration-150 disabled:opacity-60"
            type="submit"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'sending...' : 'send message'}
          </button>
          {status === 'sent' && <p className="text-sm text-amber">Message sent — thank you.</p>}
          {status === 'error' && <p className="text-sm text-red-400">Something went wrong. Please email me directly.</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;

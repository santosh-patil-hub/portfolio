import React from 'react';

const Contact = () => {
  return (
    <div className="p-8 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-8">Contact</h2>
      <p className="text-center text-lg mb-12">
        Feel free to reach out to me for any inquiries!
      </p>

      {/* Contact Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold mb-2">Address</h3>
          <p>
            Siddhart Chauk, N-5, House No 628, CIDCO, Chhatrapati Sambhaji Nagar, Maharashtra
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold mb-2">Phone</h3>
          <p>8010315133</p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold mb-2">Email</h3>
          <p>kakdesantosh993@gmail.com</p>
        </div>
      </div>

      {/* Map Section */}
      <div className="mb-12">
        <h3 className="text-3xl font-semibold text-center mb-4">Location</h3>
        <iframe
          title="Chhatrapati Sambhaji Nagar Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.695344460845!2d75.31078111489126!3d19.87498648664012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba3179c0c2a5f%3A0x8a223a53788b5e9f!2sChhatrapati%20Sambhaji%20Nagar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1680927081457!5m2!1sen!2sin"
          className="w-full h-96 rounded-lg shadow-lg"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Feedback Section */}
      <div className="mb-12">
        <h3 className="text-3xl font-semibold text-center mb-6">Feedback</h3>
        <form className="max-w-lg mx-auto bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
          <textarea
            className="w-full p-4 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-gray-100"
            placeholder="Write your message here..."
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 dark:hover:bg-blue-700 transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Social Media Icons */}
      <div className="text-center">
        <h3 className="text-3xl font-semibold mb-6">Follow Me</h3>
        <div className="flex justify-center space-x-6 text-gray-600 dark:text-gray-300 text-3xl">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-all duration-300"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-all duration-300"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-all duration-300"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-all duration-300"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-white transition-all duration-300"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

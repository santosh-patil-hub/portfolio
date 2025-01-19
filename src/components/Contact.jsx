import React, { useState } from "react";
import emailjs from "emailjs-com";
import { TextField, Button, Typography, Snackbar, Alert } from "@mui/material";

const Contact = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    contactNo: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // For success/error message
  const [openSnackbar, setOpenSnackbar] = useState(false); // For Snackbar visibility

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the email using EmailJS
    emailjs
      .send(
        "service_n4r4853", // Your service ID
        "template_zp6k9ns", // Your template ID
        formData, // Form data
        "Lcz0oyYlfbL-NU13y" // Your public key (provided by EmailJS)
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response); // Log response details
          setStatus("Message sent successfully!");
          setFormData({
            username: "",
            email: "",
            contactNo: "",
            message: "",
          });
          setOpenSnackbar(true); // Open Snackbar after successful submission
        },
        (error) => {
          console.error("Error sending email:", error); // Log error details
          setStatus("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div
      className={`max-w-4xl mx-auto p-6 rounded-lg ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <Typography variant="h4" className="text-3xl font-semibold mb-4">
        Contact Us
      </Typography>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <TextField
          label="Name"
          variant="outlined"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
          className={`p-2 rounded-lg ${
            isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100"
          }`}
        />

        <TextField
          label="Email"
          variant="outlined"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={`p-2 rounded-lg ${
            isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100"
          }`}
        />

        <TextField
          label="Contact No."
          variant="outlined"
          name="contactNo"
          value={formData.contactNo}
          onChange={handleChange}
          required
          className={`p-2 rounded-lg ${
            isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100"
          }`}
        />

        <TextField
          label="Message"
          variant="outlined"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          multiline
          rows={4}
          className={`p-2 rounded-lg ${
            isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100"
          }`}
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={`py-2 px-6 rounded-lg ${
            isDarkMode ? "bg-blue-600" : "bg-blue-500"
          }`}
        >
          Send Message
        </Button>
      </form>

      {status && (
        <Typography color="error" className="mt-4 text-red-500">
          {status}
        </Typography>
      )}

      {/* Google Map Embed (iframe) */}
      <div className="mt-8 w-full h-96 rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.467838701797!2d-73.98542868468185!3d40.74881727932809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af08ed52fd%3A0x70ba7d16de38b9e0!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1643141261465!5m2!1sen!2sus"
          title="Google Maps - Pune Phonex Market city"
          className="w-full h-full border-0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        />
      </div>

      {/* Snackbar with success message */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Thanks for contacting us! We'll get back to you soon.
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Contact;

import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/BookAppointment.css";

function BookAppointment() {
  const navigate = useNavigate();
  const location = useLocation();
  const { doctor } = location.state || {};
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });

  const [submitted, setSubmitted] = useState(false);

  if (!doctor) {
    return (
      <div className="book-container">
        <h2>Doctor not selected.</h2>
      </div>
    );
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.date || !formData.time) {
      alert("Please fill all fields.");
      return;
    }

    setSubmitted(true);
    console.log("Appointment booked:", {
      doctor: doctor.name,
      ...formData,
    });
  };

  return (
    <div className="book-container">
      {!submitted ? (
        <>
          <h2>Book Appointment with {doctor.name}</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Patient Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Date:</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Time:</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Confirm Appointment</button>
          </form>
        </>
      ) : (
        <div className="confirmation">
          <h3>Appointment Confirmed!</h3>
          <p>
            Thank you, {formData.name}. Your appointment with {doctor.name} is
            booked.
          </p>
          <button onClick={() => navigate("/")}>Back to Home</button>
        </div>
      )}
    </div>
  );
}

export default BookAppointment;

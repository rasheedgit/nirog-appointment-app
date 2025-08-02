import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

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
    return <div>Doctor not selected.</div>;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    if (!formData.name || !formData.email || !formData.date || !formData.time) {
      alert("Please fill all fields.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert("Enter a valid email.");
      return;
    }

    e.preventDefault();
    setSubmitted(true);

    // Optional: Add real API call here
    console.log("Appointment booked:", {
      doctor: doctor.name,
      ...formData,
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Book Appointment with {doctor.name}</h2>

      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Patient Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Date:</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Time:</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" style={{ marginTop: "10px" }}>
            Confirm Appointment
          </button>
        </form>
      ) : (
        <div>
          <h3>Appointment Confirmed!</h3>
          <p>Thank you, {formData.name}. Your appointment is booked.</p>
          <button onClick={() => navigate("/")}>Back to Home</button>
        </div>
      )}
    </div>
  );
}

export default BookAppointment;

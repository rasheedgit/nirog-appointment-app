import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import doctorsData from "../data/doctors.json";
import "../styles/DoctorProfile.css";

function DoctorProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const doctor = doctorsData.find((doc) => doc.id === parseInt(id));

  if (!doctor) {
    return (
      <div className="profile-container">
        <h2>Doctor not found</h2>
      </div>
    );
  }

  const handleBooking = () => {
    navigate("/book", { state: { doctor } });
  };

  return (
    <div className="profile-container">
      <img src={doctor.image} alt={doctor.name} />
      <h1>{doctor.name}</h1>
      <p>
        <strong>Specialization:</strong> {doctor.specialization}
      </p>
      <p>
        <strong>Availability:</strong> {doctor.availability}
      </p>
      <button className="book-btn" onClick={handleBooking}>
        Book Appointment
      </button>
    </div>
  );
}

export default DoctorProfile;

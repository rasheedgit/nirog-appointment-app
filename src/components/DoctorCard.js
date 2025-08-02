import React from "react";
import { Link } from "react-router-dom";
import "../styles/DoctorCard.css";

function DoctorCard({ doctor }) {
  return (
    <Link to={`/doctor/${doctor.id}`} className="doctor-card">
      <img src={doctor.image} alt={doctor.name} />
      <h3>{doctor.name}</h3>
      <p>{doctor.specialization}</p>
      <p>Status: {doctor.availability}</p>
    </Link>
  );
}

export default DoctorCard;

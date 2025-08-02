import React from "react";
import { useParams } from "react-router-dom";
import doctorsData from "../data/doctors.json";
import { useNavigate } from "react-router-dom";

function DoctorProfile() {
  const { id } = useParams();
  const doctor = doctorsData.find((doc) => doc.id === parseInt(id));
  const navigate = useNavigate();
  const handleBooking = () => {
    navigate("/book", { state: { doctor } });
  };

  if (!doctor) {
    return <div>Doctor not found</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{doctor.name}</h1>
      <img
        src={doctor.image}
        alt={doctor.name}
        style={{ width: "150px", borderRadius: "50%" }}
      />
      <p>Specialization: {doctor.specialization}</p>
      <p>Availability: {doctor.availability}</p>
      <button
        onClick={handleBooking}
        style={{ marginTop: "20px", padding: "10px 20px" }}
      >
        Book Appointment
      </button>
    </div>
  );
}

export default DoctorProfile;

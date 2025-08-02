import React, { useEffect, useState } from "react";
import doctorsData from "../data/doctors.json";
import DoctorCard from "../components/DoctorCard";
import "../styles/Home.css";

function Home() {
  const [doctors, setDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setDoctors(doctorsData);
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredDoctors = doctors.filter((doc) => {
    const nameMatch = doc.name.toLowerCase().includes(searchTerm);
    const specMatch = doc.specialization.toLowerCase().includes(searchTerm);
    return nameMatch || specMatch;
  });

  return (
    <div className="home-page">
      <h1>Our Doctors</h1>

      <input
        type="text"
        placeholder="Search by name or specialization"
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />

      <div className="doctor-list">
        {filteredDoctors.map((doc) => (
          <DoctorCard key={doc.id} doctor={doc} />
        ))}
      </div>
    </div>
  );
}

export default Home;

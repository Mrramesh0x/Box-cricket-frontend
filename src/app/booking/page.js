"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Booking = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [timeslot, setTimeSlot] = useState("");
  const [member, setTotalMember] = useState("");
  const [loading, setLoading] = useState(false);

  const timeSlots = [
    "10:00 AM – 11:00 AM",
    "11:00 AM – 12:00 PM",
    "12:00 PM – 01:00 PM",
    "01:00 PM – 02:00 PM",
    "02:00 PM – 03:00 PM",
    "03:00 PM – 04:00 PM",
    "04:00 PM – 05:00 PM",
    "05:00 PM – 06:00 PM",
    "06:00 PM – 07:00 PM",
    "07:00 PM – 08:00 PM",
    "08:00 PM – 09:00 PM",
    "09:00 PM – 10:00 PM",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(async () => {
      const response = await axios.post("http://localhost:4000/api/sendname", {
        name,
        number,
        date,
        timeslot,
        member
      });

      setName("");
      setDate("");
      setNumber("");
      setTimeSlot("");
      setTotalMember("");
      localStorage.setItem(
        "bookingData",
        JSON.stringify({ name, number, date, timeslot, member })
      );

      setLoading(false);

      if (name && number && date && timeslot && member) {
        router.push("booking/bookingdetail");
      }
    }, 6000); // ⏱️ 6-second delay
  };

  return (
    <form className="booking-form">
      <h2 className="form-title">Box Cricket Slot Booking</h2>

      <input
        type="text"
        name="name"
        placeholder="Customer Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-input"
        required
      />

      <input
        type="tel"
        name="number"
        placeholder="Mobile Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="form-input"
        required
        pattern="[0-9]{10}"
      />

      <input
        type="date"
        name="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="form-input"
        required
      />

      <select
        name="member"
        value={member}
        onChange={(e) => setTotalMember(e.target.value)}
        className="form-input"
        required
      >
        <option value="">Select Total Members</option>
        {Array.from({ length: 18 }, (_, i) => (
          <option key={i + 11} value={i + 11}>
            {i + 11} Member{i + 11 > 1 ? "s" : ""}
          </option>
        ))}
      </select>

      <select
        name="timeslot"
        value={timeslot}
        onChange={(e) => setTimeSlot(e.target.value)}
        className="form-input"
        required
      >
        <option value="">Select Time Slot</option>
        {timeSlots.map((slot, index) => (
          <option key={index} value={slot}>
            {slot}
          </option>
        ))}
      </select>

      <button
  type="submit"
  onClick={handleSubmit}
  className="form-button"
  disabled={
    loading ||
    !name.trim() ||
    !number.match(/^\d{10}$/) ||
    !date ||
    !timeslot ||
    !member
  }
>
  {loading ? <div className="spinner"></div> : "Book Slot"}
</button>
    </form>
  );
};

export default Booking;

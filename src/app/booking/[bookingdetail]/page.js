"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const BookingDetails = () => {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [timeslot, setTimeSlot] = useState("");
  const [member, setMember] = useState("");
  var [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const savedData = localStorage.getItem("bookingData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setName(parsedData.name || "");
      setNumber(parsedData.number || "");
      setDate(parsedData.date || "");
      setTimeSlot(parsedData.timeslot || "");
      setMember(parsedData.member || "");
      setAmount(parsedData.amount * 40 || "");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setStatus("Please select a file.");
      return;
    }

    const bookingId = Math.floor(Math.random() * 1000) + 1;
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "getslip");
    formData.append("cloud_name", "dcqyiaxed");

    try {
      const cloudRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dcqyiaxed/image/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      const cloudData = cloudRes.data;
      if (cloudData.secure_url) {
        const response = await axios.post("http://localhost:4000/api/sendslip", {
          imageUrl: cloudData.secure_url,
          name,
          number,
          date,
          timeslot,
          amount,
          member,
          bookingId,
        });

        if (response.status === 200) {
          localStorage.setItem("bookingId", bookingId);
          setStatus("Processing please wait")
          router.push("bookingdetail/bookingsuccess");
        } else {
          setStatus("Failed to verify payment screenshot");
        }
      }
    } catch (error) {
      setStatus("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="booking-details-container">
      <h2 className="details-title">Booking Summary</h2>

      <div className="details-section">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Mobile:</strong> {number}</p>
        <p><strong>Date:</strong> {date}</p>
        <p><strong>Time Slot:</strong> {timeslot}</p>
        <p><strong>Total Members:</strong> {member}</p>
      </div>

      <div className="payment-section">
        <h3 className="payment-title">Pay to UPI ID:</h3>
        <p className="upi-id">abc@ybl</p>
        <p className="upi-id">Total amount: {amount = member * 40}</p>
        <form className="payment-form">
          <label htmlFor="screenshot" className="upload-label">
            Upload Payment Screenshot
          </label>
          <input
            type="file"
            accept="image/*"
            id="screenshot"
            onChange={(e) => setFile(e.target.files[0])}
            className="screenshot-input"
            required
          />
{status}
          <button
            type="submit"
            onClick={handleSubmit}
            className="submit-button"
            disabled={loading}
          >
            {loading ? <div className="spinner"></div> : "Submit Payment"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingDetails;

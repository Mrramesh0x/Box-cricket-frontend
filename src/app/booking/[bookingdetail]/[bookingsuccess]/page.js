"use client";
import { useEffect, useState } from "react";

export default function BookingSuccessPage() {
  const [bookingId, setBookingId] = useState("");

  useEffect(() => {
    const id = localStorage.getItem("bookingId");
    if (id) {
      setBookingId(id);
    }
  }, []);

  return (
    <div className="booking-success-container">
      <div className="booking-success-card">
        <h1 className="booking-success-title">✅ Booking Received</h1>
        <p className="booking-success-message">
          Thank you! Your booking has been received.
        </p>

        <p className="booking-id">
          <strong>Booking ID:</strong> {bookingId}
        </p>

        <p className="verification-info">
          We are verifying your payment manually.
          <br />
          You will receive a confirmation message on your WhatsApp number.
        </p>

        <p className="estimated-time">
          ⏱ Estimated time: <strong>Up to 10 minutes</strong>
        </p>

        <a href="/" className="back-home-button">
          Back to Home
        </a>
      </div>
    </div>
  );
}

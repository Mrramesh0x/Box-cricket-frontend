"use client";

import { useRouter } from "next/navigation";

const Pricing = () => {
    const router = useRouter()
    const handleRedirect = async ()=> {
router.push("/booking")
    }
  return (
    <section className="pricing-section">
      <h2>Pricing</h2>
      <p className="pricing-subtitle">Simple and affordable. Only pay for what you play.</p>
      <div className="pricing-box">
        <h3>₹40 / Person</h3>
        <p>Per Hour</p>
        <ul>
          <li>Minimum 12 players</li>
          <li>Lights Included</li>
          <li>Refreshments Available</li>
          <li>No hidden fees</li>
        </ul>
        <button onClick={handleRedirect} className="pricing-button">Book Now</button>
      </div>
    </section>
  );
};

export default Pricing;

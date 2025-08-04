"use client";

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2>How It Works ?</h2>
      <div className="steps-container">
        {/* Step 1 */}
        <div className="step">
          <div className="icon">
            {/* Calendar Icon */}
            <svg width="60" height="60" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10m-11 8h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3>1. Select Date & Time</h3>
          <p>Pick your preferred time slot from our booking calendar.</p>
        </div>

        {/* Step 2 */}
        <div className="step">
          <div className="icon">
            {/* Payment Icon */}
            <svg width="60" height="60" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a4 4 0 00-8 0v2m-3 0h14a2 2 0 012 2v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7a2 2 0 012-2z" />
            </svg>
          </div>
          <h3>2. Make Payment</h3>
          <p>Complete your payment online to lock your slot.</p>
        </div>

        {/* Step 3 */}
        <div className="step">
          <div className="icon">
            {/* Play Icon */}
            <svg width="60" height="60" fill="currentColor" viewBox="0 0 24 24">
              <path d="M5 3l14 9-14 9V3z" />
            </svg>
          </div>
          <h3>3. Play & Enjoy!</h3>
          <p>Come with your team and enjoy your game session!</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

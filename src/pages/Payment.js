import React from "react";
import "./Pricing.css";

const Payment = () => {
    return (
        <div className="payment-container">
            <h2>Payment for Basic Plan</h2>
            <form className="payment-form">
                <label>Name:</label>
                <input type="text" required />

                <label>Mobile Number:</label>
                <input type="text" required />

                <label>Date of Birth:</label>
                <input type="date" required />

                <label>Email:</label>
                <input type="email" required />

                <label>Gender:</label>
                <div className="gender-group">
                    <input type="radio" name="gender" value="Male" /> Male
                    <input type="radio" name="gender" value="Female" /> Female
                </div>

                <label>Plan Cost:</label>
                <input type="text" value="$19.99" readOnly />

                <label>Tax (5%):</label>
                <input type="text" value="$1.00" readOnly />

                <label>Convenience Fee (3%):</label>
                <input type="text" value="$0.60" readOnly />

                <label>Total Price:</label>
                <input type="text" value="$21.59" readOnly />
            </form>

            <div className="button-group">
                <button type="submit">Make Payment</button>
                <button type="reset">Reset Fields</button>
                <button type="button" onClick={() => window.location.href='/pricing'}>Select Another Plan</button>
            </div>
        </div>
    );
};

export default Payment;

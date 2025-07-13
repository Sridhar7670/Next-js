"use client"

import React, { useState } from "react";
import styles from "./forgot.module.css";  // import CSS module



const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  function validateEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleSubmit = async () => {
    if (!email) {
      setMessage("Email is required");
      setIsError(true);
      return;
    }
    if (!validateEmail(email)) {
      setMessage("Invalid email format");
      setIsError(true);
      return;
    }

    try {
      const res = await fetch("https://backend/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(data.msg || "Password reset email sent!");
        setIsError(false);
      } else {
        setMessage(data.msg || "Something went wrong");
        setIsError(true);
      }
    } catch {
      setMessage("Network error. Please try again later.");
      setIsError(true);
    }
  };

  return (
   <div className={styles.Gp}>
     <div className={styles.forgotPassword}>
      <h1 className={styles.h1}>Forgot Password</h1>

      <label htmlFor="email" className={styles.labelForgot}>Email ID</label>
      <input
        type="text"
        id="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={styles.input}
      />

      {message && (
        <div className={isError ? styles.errorMsg : styles.successMsg}>
          {message}
        </div>
      )}

      <button className={styles.button} onClick={handleSubmit}>
        Send Reset Link
      </button>
    </div>
   </div>
  );
};

export default ForgotPassword;

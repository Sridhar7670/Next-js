// "use client";

// // Check if this import is correct for your Next.js version
// import { useActionState } from "react"; 
// import submitContactForm from "../actions/actions";

// export default function ContactForm() {
//   // Destructure returned values from useActionState hook
//   const [state, action, isLoading] = useActionState(submitContactForm, {
//     email: "",
//     message: "",
//   },"");

//   return (
//     <form action={action} style={{ maxWidth: "400px", margin: "auto" }}>
//       <h2>Contact Us</h2>

//       <div style={{ marginBottom: "1rem" }}>
//         <label htmlFor="email">Email:</label>
//         <br />
//         <input
//           type="email"
//           id="email"
//           name="email"
//           required
//           defaultValue={state.email}
//           style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
//           // You can add onChange here if you want to update state manually
//         />
//       </div>

//       <div style={{ marginBottom: "1rem" }}>
//         <label htmlFor="message">Message:</label>
//         <br />
//         <textarea
//           id="message"
//           name="message"
//           required
//           rows={4}
//           defaultValue={state.message}
//           style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
//           // Add onChange if you want to update state manually
//         />
//       </div>

//       <button type="submit" style={{ padding: "10px 16px" }}>
//         {isLoading ? "Submitting..." : "Send"}
//       </button>

//       {state && <p style={{ color: "red" }}>{state.message || "Error occurred"}</p>}
//     </form>
//   );
// }

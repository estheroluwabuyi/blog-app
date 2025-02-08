import { useState } from "react";

function App() {
  return (
    <div>
      {/* <RegisterForm /> */}
      <LoginForm />
    </div>
  );
}

// function RegisterForm() {
//   const [email, setEmail] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [password, setPassword] = useState("");
//   const [isPublisher, setIsPublisher] = useState(true);
//   const [error, setError] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch(
//         "https://artistic-insights-alley-api.onrender.com/api/user/register",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             email,
//             first_name: firstName,
//             last_name: lastName,
//             password,
//             is_publisher: isPublisher,
//           }),
//         }
//       );

//       if (
//         !email.trim() ||
//         !password.trim() ||
//         !firstName.trim() ||
//         !lastName.trim()
//       ) {
//         alert("All fields are required.");
//         return;
//       }

//       const data = await response.json();
//       console.log(data);

//       // if (response.ok) {
//       //   setSuccessMessage("Registration successful!");
//       //   console.log("Registration successful", data);
//       // } else {
//       //   setError(data.message || "Registration failed");
//       // }
//     } catch (error) {
//       setError("Something went wrong!");
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit} className="register-form">
//         <input
//           type="email"
//           placeholder="Email"
//           className="input"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="First Name"
//           className="input"
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Last Name"
//           className="input"
//           value={lastName}
//           onChange={(e) => setLastName(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="input"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         {/* <label>
//           Register as Publisher:
//           <input
//             type="checkbox"
//             checked={isPublisher}
//             onChange={() => setIsPublisher(!isPublisher)}
//           />
//         </label> */}
//         <button type="submit" className="form-btn">
//           Register
//         </button>
//       </form>
//       {/* {error && <p>{error}</p>}
//       {successMessage && <p>{successMessage}</p>} */}
//     </div>
//   );
// }

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://artistic-insights-alley-api.onrender.com/api/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        localStorage.setItem("accessToken", data.access);
        localStorage.setItem("refreshToken", data.refresh);
        // history.push("/dashboard");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (error) {
      setError("An error occurred, please try again later");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="form-btn">
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default App;

/*LOG OUT
localStorage.removeItem("accessToken");
localStorage.removeItem("refreshToken");

*/

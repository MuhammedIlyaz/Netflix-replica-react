import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Trending from "./components/Trending";
import Reasons from "./components/Reasons";
import FAQ from "./components/FAQ.jsx";
import Membership from "./components/Membership.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [email, setemail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "") {
      setMessage("Please enter your email.");
    } else {
      setMessage("Email submitted successfully!");
    }
  };

  return (
    <div className="app">
      <section className="hero">
        <Navbar />
          <div className="hero-content">
            <h1>
              Laughs, Tears, Trills.
              <br />
              Its all here.
            </h1>

            <p className="price">Starts at USD 2.99. Cancel anytime</p>
            <p className="membership-text">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>

            <form className="email-box" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              ></input>

              <button type="submit">Get started </button>
            </form>
            <p className="form-message">{message}</p>
          </div>
      </section>

      <Trending />

      <Reasons />

      <FAQ />
      <Membership />
      <Footer />
    </div>
  );
}

export default App;

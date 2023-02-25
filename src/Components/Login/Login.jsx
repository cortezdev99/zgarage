import { useState } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Config/firebase';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import wholesomeDogImage from "../../Images/Other/wholesome-dog.png"

const Login = () => {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ signedIn, setSignedIn ] = useState(false);
  const [ error, setError ] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (subscriber) => {
      if (subscriber) {
        setSignedIn(true);
      }
    })
  }, [])

  useEffect(() => {
    if (loading) {
      return handleSigningIn();
    }
  }, [loading])

  const handleSigningIn = () => {
    if (email.length === 0) {
      return setError("You need to provide an email to sign in.")
    }

    if (password.length === 0) {
      return setError("You need to provide a password to sign in.")
    } 

    signInWithEmailAndPassword(auth, email, password).catch((e) => {
      if (e.code === "auth/invalid-email") {
        setError("Your email isn't formatted correctly. Please submit a valid email.");
        return setLoading(false);
      } else if (e.code === "auth/wrong-password" || e.code === "auth/invalid-password") {
        setError("Your password is incorrect. Please try again.");
        return setLoading(false);
      } else if (e.code === "auth/user-not-found") {
        setError("An account doesn't exist with this email. Please try again.");
        return setLoading(false);
      } else {
        setError(e.message);
        return setLoading(false);
      }
    });
  }

  if (signedIn) {
    return (
      <div className="login-already-signed-in-wrapper" style={{ textAlign: "center", padding: "0px 40px 40px", minHeight: "50vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className="login-already-signed-in-image-wrapper" style={{ maxWidth: "300px", margin: "0 auto" }}>
          <img
            className="login-already-signed-in-image"
            src={wholesomeDogImage}
            style={{ width: "100%", objectFit: "cover" }}
          />
        </div>

        <div className="login-already-signed-in-content" style={{ fontSize: "18px", fontWeight: "600", letterSpacing: "0.75px", color: "#264a73", letterSpacing: "0.75px", lineHeight: "25px" }}>
          <div className="login-already-signed-in-content-header">
            You're signed in! 
          </div>

          <div className="login-already-signed-in-content-subtext">
            Admin panels, and admin only access restrictions have been lifted. 
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="login-wrapper" style={{ padding: "40px" }}>
      <div className="login-header" style={{ paddingBottom: "10px", color: "#264a73", fontWeight: "600", margin: "0 auto", width: "20%", minWidth: "120px", fontSize: "22px", textAlign: "center" , padding: "0px 20px", borderBottom: "1.5px solid #1d1d1d" }}>
        Login
      </div>

      <div className="login-form-wrapper" style={{ marginTop: "40px" }}>
        <div className="login-form-input-wrapper">
          <input
            type="text"
            placeholder="EMAIL"
            value={email}
            className="login-form-input"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div style={{ paddingTop: "20px" }}>
          <input
            type="text"
            placeholder="PASSWORD"
            className="login-form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {
          error ? (
            <div className="login-form-error" style={{ marginTop: "40px", color: "#ff2424", textAlign: "center", textTransform: "uppercase", fontSize: "14px", fontWeight: "600" }}>
              {error}
            </div>
          ) : null
        }

        <button 
          onClick={() => loading ? null : setLoading(true) }
          className="login-form-btn"
          style={{
            width: "60%",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#264a73",
            border: "2.5px solid #264a73",
            color: "#FFF",
            fontWeight: "600",
            marginTop: "40px",
            height: "40px",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          SUBMIT
        </button>
      </div>
    </div>
  )
}

export default Login;
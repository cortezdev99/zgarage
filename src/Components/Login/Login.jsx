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
      <div className="login-already-signed-in-wrapper">
        <div className="login-already-signed-in-image-wrapper">
          <img
            className="login-already-signed-in-image"
            src={wholesomeDogImage}
          />
        </div>

        <div className="login-already-signed-in-content">
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
    <div className="login-wrapper">
      <div className="login-header">
        Login
      </div>

      <div className="login-form-wrapper">
        <div className="login-form-input-wrapper">
          <input
            type="text"
            placeholder="EMAIL"
            value={email}
            className="login-form-input"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="login-form-input-wrapper">
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
            <div className="login-form-error">
              {error}
            </div>
          ) : null
        }

        <button 
          onClick={() => loading ? null : setLoading(true) }
          className="login-form-btn"
        >
          SUBMIT
        </button>
      </div>
    </div>
  )
}

export default Login;
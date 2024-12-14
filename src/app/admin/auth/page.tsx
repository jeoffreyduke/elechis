"use client";
import React, { useState } from "react";
import { collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { AuthErrorCodes, signInWithEmailAndPassword } from "firebase/auth";
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import { auth, db } from "../../../../firebaseConfig";
import Header from "@/app/components/Header";
import { useAuthState } from "react-firebase-hooks/auth";

function Auth() {
  const [authLoading, setAuthLoading] = useState(false);

  const usersRef = collection(db, "users");
  const [users] = useCollectionData(usersRef);
  const [user, loading] = useAuthState(auth);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const loginEmailPassword = async () => {
    try {
      setAuthLoading(true);
      await signInWithEmailAndPassword(auth, username, password);
      setAuthLoading(false);
    } catch (error: any) {
      switch (error.code) {
        case AuthErrorCodes.INVALID_EMAIL:
          setAuthLoading(false);
          setError("Invalid email");
          break;
        case AuthErrorCodes.USER_DELETED:
          setAuthLoading(false);
          setError("User not found");
          break;
        case AuthErrorCodes.INVALID_PASSWORD:
          setAuthLoading(false);
          setError("Wrong password");
          break;
        default:
          setAuthLoading(false);
          setError("Something went wrong");
      }
    }
  };

  const handleLogin = (e: any) => {
    e.preventDefault();

    if (password === "" || username === "") {
      setError("Please fill in all fields");
      return;
    }

    if (users) {
      for (const user of users) {
        if (user?.username === username && user?.password === password) {
          setError("");
          loginEmailPassword();
          break;
        } else if (user?.username === username && user?.password !== password) {
          setError("Wrong password, please try again");
        } else if (user?.username !== username && user?.password === password) {
          setError("Your username does not seem to be correct");
        } else {
          setError("Incorrect credentials, please try again");
        }
      }
    }
  };

  return (
    <main className="h-[100vh]">
      <Header />

      <p className="bg-[rgb(233,186,0)] w-fit mb-4 p-3 pr-[3rem] text-[1.5rem] m-16 max-sm:m-8">
        <b>Sign In</b>
      </p>

      <div className="flex max-sm:justify-center p-16 pt-4 max-sm:mx-4 max-sm:p-4">
        <form className="" onSubmit={handleLogin}>
          <div className="mt-0 w-[20rem]">
            <label className="font-[600]">
              Username
              <span className="text-red text-[0.9rem] font-light">*</span>
            </label>
            <br />
            <input
              className="h-12 w-[30rem] max-sm:w-[100%] bg-transparent border border-[rgb(34,20,0)] outline-[rgb(34,24,0)] px-4 mt-2"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          </div>

          <div className="mt-4 w-[20rem]">
            <label className="font-[600]">
              Password
              <span className="text-red text-[0.9rem] font-light">*</span>
            </label>
            <br />
            <div className="sm:w-[30rem] relative flex items-center border border-[rgb(34,20,0)] mt-2">
              <input
                className="h-12 max-sm:w-[100%] bg-transparent border-none outline-none px-4"
                type={passwordVisible ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />

              <div
                className="absolute right-4"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? (
                  <VisibilityOffOutlined className="" />
                ) : (
                  <VisibilityOutlined className="" />
                )}
              </div>
            </div>
          </div>

          {error && <div className="text-[0.8rem] text-[red]">{error}</div>}

          <button
            className="sm:w-[30rem] bg-[rgb(30,24,0)] text-[rgb(233,186,0)] m-4 rounded-md h-[3rem] w-[20rem] mx-0 my-8"
            type="submit"
            onClick={handleLogin}
          >
            {authLoading ? "Loading..." : "Submit"}
          </button>
        </form>
      </div>
    </main>
  );
}

export default Auth;

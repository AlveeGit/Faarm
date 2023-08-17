// import styles from "../styles/UserStyle.module.css";
// import Input from "../components/Input";

"use client";
import { useState } from "react";
import InputField from "../components/Data/InputField";

const SignUp = () => {
  const [busy, setBusy] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    // role: "user",
  });
  const { name, email, password } = userInfo;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]:value });
  };

  const handleSubmit = async (e) => {
    setBusy(true);
    e.preventDefault();
    const res = await fetch("/api/auth/users/route", {
      method: "POST",
      body: JSON.stringify(userInfo),
    }).then((res) => res.json());
    console.log(res);
    setBusy(false);
  };

  return (
    <div className="bg-gradient-to-b from-[#02001c] to-[#c3c3c3] h-screen flex  items-center">
      <div className="  bg-gradient-to-b from-[#dbd9ee] to-[#0d0025] h-[510px] w-[400px] mx-auto shadow-xl shadow-indigo-500/40 overflow-hidden border rounded-lg ">
        <input type="checkbox" id="chk" />

        <div className="relative">
          <form onSubmit={handleSubmit}>
            <label
              for="chk"
              className="text-3xl text-black font-bold m-10 flex cursor-pointer justify-center"
            >
              Sign Up
            </label>

            

            <div className=" flex flex-col w-full place-items-center ">
              <InputField
                label="Name"
                name="name"
                value={name}
                placeholder="Name"
                onChange={handleChange}
              />
              <InputField
                label="Email"
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={handleChange}
              />
              <InputField
                label="Password"
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="bg-black text-white  rounded-lg button1 "
              disabled={busy}
              style={{opacity: busy ? 0.5 : 1}}
            >
              Sign Up
            </button>
          </form>
        </div>

        <div id="loginSection" className="loginSec">
          <form>
            <label
              // htmlFor="chk"
              for="chk"
              className="text-3xl text-black font-bold  p-5 flex cursor-pointer justify-center"
            >
              Log In
            </label>

            <div className=" flex flex-col w-full place-items-center ">
              <InputField
                label="Email"
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={handleChange}
              />
              <InputField
                label="Password"
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={handleChange}
              />
              <button className="bg-black text-white p-2 rounded-lg button1">
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignUp;

import { useState } from "react";
import InputField from "../components/Data/InputField";
import axios from "axios";
import { useRouter } from "next/router";
import { loginUser } from "../utils/utilities";


const SignUp = () => {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const apiRes = await axios.post(
        "http://localhost:3000/api/auth/signup",
        data
      );
      if (apiRes?.data?.success) {
        const loginRes = await loginUser({
          email: data.email,
          password: data.password,
        });

        if (loginRes && !loginRes.ok) {
          console.log("error in login", loginRes);
        } else {
          router.push("/");
        }
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div className="bg-gradient-to-b from-[#02001c] to-[#c3c3c3] h-screen flex  items-center">
      <div className="  bg-gradient-to-b from-[#dbd9ee] to-[#0d0025] h-[600px] w-[400px] mx-auto shadow-xl shadow-indigo-500/40 overflow-hidden border rounded-lg ">
        <input type="checkbox" id="chk" />

        <div className="relative">
          <form onSubmit={handleSignup}>
            <label
              for="chk"
              className="text-3xl text-black font-bold m-10 flex cursor-pointer justify-center"
            >
              Sign Up
            </label>

            <div className=" flex flex-col w-full place-items-center ">
              <InputField
                type="text"
                placeholder={"Full Name"}
                value={data.fullName}
                name="fullName"
                onChange={handleInputChange}
                required
              />
              <InputField
                type="email"
                placeholder={"Email"}
                value={data.email}
                name="email"
                onChange={handleInputChange}
                required
              />
              <InputField
                type="password"
                placeholder={"Password"}
                value={data.password}
                name="password"
                onChange={handleInputChange}
                required
              />
              <InputField
                type="password"
                placeholder={"Confirm Password"}
                value={data.confirmPassword}
                name="confirmPassword"
                onChange={handleInputChange}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-black text-white  rounded-lg button1 "
              disabled={loading}
            >
              Sign Up
            </button>
          </form>
        </div>

        <div id="loginSection" className="loginSec">
          <form>
            <label
              for="chk"
              className="text-3xl text-black font-bold  p-5 flex cursor-pointer justify-center"
            >
              Log In
            </label>

            <div className=" flex flex-col w-full place-items-center ">
              <InputField
                type="email"
                placeholder={"Email"}
                value={data.email}
                name="email"
                onChange={handleInputChange}
                required
              />
              <InputField
                type="password"
                placeholder={"Password"}
                value={data.password}
                name="password"
                onChange={handleInputChange}
                required
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

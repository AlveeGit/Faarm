import { useRouter } from "next/router";
import InputField from "./Data/InputField";
import { loginUser } from "@/utils/utilities";
import { useState } from "react";

const SigninForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSingIn = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const loginRes = await loginUser({ email, password });
      if (loginRes && !loginRes.ok) {
        console.log("error in SignIN", loginRes);
      } else {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  return (
    <div>
      <div id="loginSection" className="loginSec">
        <form onSubmit={handleSingIn}>
          <label
            for="chk"
            className="text-3xl text-black font-bold  p-5 flex cursor-pointer justify-center"
          >
            Sign In
          </label>

          <div className=" flex flex-col w-full place-items-center ">
            <InputField
              type="email"
              placeholder={"Email"}
              value={email}
              name="email"
              onChange={handleEmailChange}
              required
            />
            <InputField
              type="password"
              placeholder={"Password"}
              value={password}
              name="password"
              onChange={handlePasswordChange}
              required
            />
            <button
              type="submit"
              className="bg-black text-white p-2 rounded-lg button1"
              disabled={loading}
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SigninForm;

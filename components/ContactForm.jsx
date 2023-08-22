import { useState } from "react";
import InputField from "./Data/InputField";
import axios from "axios";
import { useRouter } from "next/router";

const ContactForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const apiRes = await axios.post(
        "http://localhost:3000/api/feedback/feedback",
        data
      );

      if (apiRes?.data?.success) {
        alert("Thank you for contacting us!");
      }
      else{
        alert("Something went wrong while submitting the form!");
      }
    } catch (error) {
      console.log(error);
    }
    finally{
      router.push("/");
    }
    setLoading(false);
  };

  return (
    <div className=" h-screen bg-gray-400 pt-60">
      <div className=" w-[450px] mx-auto bg-slate-200 py-4 rounded-lg">
        <div className="row">
          <h1 className="text-center text-5xl p-3 font">Contact us</h1>
        </div>
        <div className="row">
          <h4 className="text-center">We would love to hear from you!</h4>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="pb-5 flex flex-col w-full place-items-center">
            <InputField
              type="text"
              placeholder={"Name"}
              value={data.name}
              name="name"
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
              type="text"
              placeholder={"Contact"}
              value={data.contact}
              name="contact"
              onChange={handleInputChange}
              required
            />
            <textarea
              id=""
              cols="30"
              rows="10"
              type="text"
              placeholder={"Message"}
              value={data.message}
              name="message"
              onChange={handleInputChange}
              required
              className="w-4/5 p-5 rounded-xl bg-gray-200 border-solid border-sky-600 input1"
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white  rounded-lg button1 "
            disabled={loading}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default ContactForm;

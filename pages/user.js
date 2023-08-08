// import styles from "../styles/UserStyle.module.css";
import Input from "../components/Input";
import { inputInfo } from "../components/Data/InputField";

const profile = () => {
  return (
    <div className="bg-gradient-to-b from-[#02001c] to-[#c3c3c3] h-screen flex  items-center">
      <div className="  bg-gradient-to-b from-[#dbd9ee] to-[#0d0025] h-[510px] w-[400px] mx-auto shadow-xl shadow-indigo-500/40 overflow-hidden border rounded-lg ">
        <input type="checkbox" id="chk" />

        <div className="relative">
          <form>
            <label
              for="chk"
              className="text-3xl text-black font-bold m-10 flex cursor-pointer justify-center"
            >
              Sign Up
            </label>

            <div className=" flex flex-col w-full place-items-center ">
              {inputInfo.slice(0, 3).map((info) => (
                <Input key={info.id} info={info} />
              ))}
            </div>

            <button className="bg-black text-white  rounded-lg button1 ">
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
              {inputInfo.slice(0, 2).map((info) => (
                <Input key={info.id} info={info} />
              ))}
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
export default profile;

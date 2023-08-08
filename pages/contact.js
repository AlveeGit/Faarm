import Input from "../components/Input";
import { inputInfo } from "../components/Data/InputField";

const contact = () => {
  return (
    <div className=" h-screen bg-gray-400 pt-60">
      <div className=" w-[350px] mx-auto bg-slate-200 py-4 rounded-lg">
        <div className="row">
          <h1 className="text-center text-5xl p-3 font">Contact us</h1>
        </div>
        <div className="row">
          <h4 className="text-center">We would love to hear from you!</h4>
        </div>

        <form>
          <div className="pb-5 flex flex-col w-full place-items-center">
            {inputInfo.map((info) => (
              <Input key={info.id} info={info} />
            ))}
          </div>
          <button className="bg-black text-white p-2 rounded-lg button1">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default contact;

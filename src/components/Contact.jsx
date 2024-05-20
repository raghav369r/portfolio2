import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="ml-2 md:ml-20 my-20">
      <h1 className="text-primary text-4xl mb-5 font-semibold">ContactMe</h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <Input name={"Name"} placeholder={"Enter ur name"} type={"email"} />
          <Input name={"email"} placeholder={"Enter ur email"} type={"email"} />
          <Input
            name={"textarea"}
            placeholder={"Enter ur message"}
            type={"textarea"}
          />
          <button className="bg-primary text-black font-semibold rounded-full px-4 py-2">
            Send
          </button>
        </div>
        <div className="md:w-1/3 flex justify-center items-center">
          <div>
            <div className="text-xl my-4 font-semibold flex items-center gap-4">
              <MdEmail className="" />
              <p>raghav1010reddy@gmail.com</p>
            </div>
            <div className="text-xl my-4 font-semibold flex items-center gap-4">
              <FaPhoneAlt />
              <p>+91 76708 37792</p>
            </div>
            <div className="text-xl my-4 font-semibold flex items-center gap-4">
              <IoLocationSharp />
              <p>Hindupur,AndraPradesh</p>
            </div>
          </div>
        </div>
        <img
          alt=""
          src="/images/contact.svg"
          className="hidden md:block md:w-1/3 max-h-[60vh] object-contain"
        />
      </div>
    </div>
  );
};
const Input = ({ name, placeholder, type }) => {
  return (
    <div className="flex flex-col my-5">
      <label
        htmlFor={name}
        className="text-primary font-semibold w-fit bg-bgcol translate-x-4 translate-y-1/2 px-2"
      >
        {name}
      </label>
      {type === "textarea" ? (
        <textarea
          type={type}
          name={name}
          placeholder={placeholder}
          rows={4}
          className="px-4 py-2 bg-transparent border-4 border-primary border-opacity-70 focus:border-opacity-100 rounded-2xl outline-none"
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="px-4 py-2 bg-transparent border-4 border-primary border-opacity-70 focus:border-opacity-100   rounded-2xl outline-none"
        />
      )}
    </div>
  );
};

export default Contact;

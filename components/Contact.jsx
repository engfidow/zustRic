import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!form.name || !form.email || !form.message) {
      toast.error("Please provide a value in each input field");
      setLoading(false);
    } else {
      try {
        const result = await emailjs.send(
          "service_6shhp7q",
          "template_0796vqq",
          {
            from_name: form.name,
            to_name: "Wafi Electrical Services",
            from_email: form.email,
            to_email: "abdallayusufahmed@gmail.com",
            message: form.message,
          },
          "user_C2jkXqp3jcS1Yp6MSc9fe"
        );

        setLoading(false);
        toast.success("Thank you. I will get back to you as soon as possible.");
        setForm({
          name: "",
          email: "",
          message: "",
        });
      } catch (error) {
        setLoading(false);
        console.error(error);
        alert("Ahh, something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-center py-12 px-4 md:px-8 bg-white">
      <div className="flex-1">
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          {/* ... Your form fields ... */}
          <label className="flex flex-col">
            <span className="text-light font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-white py-4 px-6 placeholder:text-secondary placeholder-light rounded-lg outline-none border border-blue-500 font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-light font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-white py-4 px-6 placeholder:text-secondary placeholder-light rounded-lg outline-none border border-blue-500 font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-light font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-white py-4 px-6 placeholder:text-secondary placeholder-light rounded-lg outline-none border border-blue-500 font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-[#1260A9] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-secondary hover:bg-[#01C0FE] "
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
      <div className="flex-1 mt-8 md:mt-0 md:ml-8">
        <Image
          src="/contact/img1.jpg"
          width={200} // Replace with the actual width of your image
          height={100} // Replace with the actual height of your image
          className="rounded-lg shadow-lg"
          layout="responsive"
          alt="Contact"
        />
      </div>

      <ToastContainer className="mt-20 w-[400px]" />
    </div>
  );
};

export default Contact;
